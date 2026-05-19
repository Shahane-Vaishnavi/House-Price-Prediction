import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import joblib
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import requests

app = Flask(__name__)
CORS(app)

# Load data
data_path = os.path.join(os.path.dirname(__file__), 'Data', 'Maharashtra_House_Prices_Final.csv')
df = pd.read_csv(data_path)

# Preprocess data
X = df[['Division', 'District Name', 'Area_Name', 'Type']]
y = df['Price_Per_SqFt']

# Create preprocessor
categorical_features = ['Division', 'District Name', 'Area_Name', 'Type']
preprocessor = ColumnTransformer(
    transformers=[
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ])

# Train model
model = Pipeline([
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

model.fit(X, y)

# Save model
joblib.dump(model, 'house_price_model.pkl')

# Haversine formula for distance calculation
def haversine(lat1, lng1, lat2, lng2):
    R = 6371
    dLat = np.radians(lat2 - lat1)
    dLng = np.radians(lng2 - lng1)
    a = np.sin(dLat/2)**2 + np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * np.sin(dLng/2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1-a))
    return R * c

# District coordinates
district_coords = {
    "Mumbai City": {"lat": 18.9388, "lng": 72.8354},
    "Mumbai Suburban": {"lat": 19.0760, "lng": 72.8777},
    "Thane": {"lat": 19.2183, "lng": 72.9781},
    "Palghar": {"lat": 19.6967, "lng": 72.7657},
    "Raigad": {"lat": 18.5158, "lng": 73.1824},
    "Ratnagiri": {"lat": 16.9944, "lng": 73.3000},
    "Sindhudurg": {"lat": 16.0455, "lng": 73.5244},
    "Pune": {"lat": 18.5204, "lng": 73.8567},
    "Satara": {"lat": 17.6805, "lng": 74.0183},
    "Sangli": {"lat": 16.8524, "lng": 74.5815},
    "Kolhapur": {"lat": 16.7050, "lng": 74.2433},
    "Solapur": {"lat": 17.6599, "lng": 75.9064},
    "Nashik": {"lat": 19.9975, "lng": 73.7898},
    "Dhule": {"lat": 20.9042, "lng": 74.7749},
    "Nandurbar": {"lat": 21.3667, "lng": 74.2333},
    "Jalgaon": {"lat": 21.0077, "lng": 75.5626},
    "Ahilyanagar (Ahmednagar)": {"lat": 19.0948, "lng": 74.7480},
    "Chhatrapati Sambhajinagar": {"lat": 19.8762, "lng": 75.3433},
    "Jalna": {"lat": 19.8347, "lng": 75.8816},
    "Parbhani": {"lat": 19.2704, "lng": 76.7749},
    "Hingoli": {"lat": 19.7172, "lng": 77.1495},
    "Nanded": {"lat": 19.1383, "lng": 77.3210},
    "Dharashiv (Osmanabad)": {"lat": 18.1788, "lng": 76.0395},
    "Latur": {"lat": 18.4088, "lng": 76.5604},
    "Beed": {"lat": 18.9891, "lng": 75.7601},
    "Amravati": {"lat": 20.9320, "lng": 77.7523},
    "Akola": {"lat": 20.7002, "lng": 77.0082},
    "Washim": {"lat": 20.1119, "lng": 77.1465},
    "Buldhana": {"lat": 20.5292, "lng": 76.1843},
    "Yavatmal": {"lat": 20.3888, "lng": 78.1204},
    "Nagpur": {"lat": 21.1458, "lng": 79.0882},
    "Wardha": {"lat": 20.7453, "lng": 78.6022},
    "Bhandara": {"lat": 21.1666, "lng": 79.6500},
    "Gondia": {"lat": 21.4602, "lng": 80.1978},
    "Chandrapur": {"lat": 19.9615, "lng": 79.2961},
    "Gadchiroli": {"lat": 20.1809, "lng": 80.0}
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    division = data.get('Division')
    district = data.get('District Name')
    area = data.get('Area_Name')
    property_type = data.get('Type')
    sqft = float(data.get('sqft', 1000))
    
    # Find matching row from dataset
    matches = df[
        (df['Division'] == division) &
        (df['District Name'] == district) &
        (df['Area_Name'] == area) &
        (df['Type'] == property_type)
    ]
    
    if len(matches) == 0:
        matches = df[
            (df['District Name'] == district)
        ]
    
    if len(matches) == 0:
        matches = df[
            (df['Division'] == division)
        ]
    
    row = matches.iloc[0] if len(matches) > 0 else df.iloc[0]
    
    price_per_sqft = row['Price_Per_SqFt']
    low_per_sqft = row['Price_Range_Low']
    high_per_sqft = row['Price_Range_High']
    growth_potential = row['Growth_Potential']
    
    total_price = price_per_sqft * sqft
    total_low = low_per_sqft * sqft
    total_high = high_per_sqft * sqft
    
    return jsonify({
        'total_price': total_price,
        'total_low': total_low,
        'total_high': total_high,
        'price_per_sqft': price_per_sqft,
        'low_per_sqft': low_per_sqft,
        'high_per_sqft': high_per_sqft,
        'growth_potential': growth_potential,
        'division': row['Division']
    })

@app.route('/api/nearby', methods=['POST'])
def nearby():
    data = request.json
    lat = float(data.get('lat'))
    lng = float(data.get('lng'))
    radius = float(data.get('radius', 100))  # km
    
    # Calculate distances
    df['distance'] = df['District Name'].apply(
        lambda x: haversine(lat, lng, district_coords[x]['lat'], district_coords[x]['lng']) 
        if x in district_coords else 9999
    )
    
    nearby_properties = df[df['distance'] <= radius].sort_values('distance').head(10)  
    
    return jsonify({
        'properties': nearby_properties.to_dict('records')
    })

@app.route('/near-me')
def near_me():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    
    # Reverse geocode using Nominatim
    url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json"
    data = requests.get(url, headers={"User-Agent": "HousingPricePrediction/1.0"}).json()
    
    # Find nearest district from our dataset
    min_dist = 9999
    nearest_district = None
    avg_price = 0
    for name, coords in district_coords.items():
        dist = haversine(float(lat), float(lon), coords['lat'], coords['lng'])
        if dist < min_dist:
            min_dist = dist
            nearest_district = name
            avg_price = df[df['District Name'] == name]['Price_Per_SqFt'].mean()
    
    return jsonify({
        "address": data.get("display_name"),
        "nearby_district": nearest_district,
        "avg_price": round(avg_price * 1000)  # Average price for 1000 sq ft
    })

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        'divisions': df['Division'].unique().tolist(),
        'districts': df['District Name'].unique().tolist(),
        'areas': df['Area_Name'].unique().tolist(),
        'types': df['Type'].unique().tolist(),
        'data': df.to_dict('records'),
        'coords': district_coords
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
