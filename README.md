# National Housing Price Prediction & Geospatial Analysis Portal

A web application for predicting house prices in Maharashtra, India, with geospatial features.

## Project Structure
```
ML_Project/
├── Data/
│   └── Maharashtra_House_Prices_Final.csv  # Dataset with house prices
├── static/
│   ├── styles.css               # Styles for the web interface
│   ├── script.js               # JavaScript for interactivity
│   └── HPP_Logo.png          # Logo for the application
├── templates/
│   └── index.html             # Flask template
├── index.html                 # Main HTML file (standalone)
├── app.py                   # Flask backend with ML model
├── requirements.txt          # List of Python dependencies
└── README.md                 # This file!
```

## JavaScript Functions (script.js)
| Function Name            | What it Does
|-------------------------|--------------------------------
| `fmt(n)`               | Formats a number as Indian Rupees (₹) with commas
| `fmtCr(n)`             | Formats price in Lakh (L) or Crore (Cr) for readability
| `filterDistricts()`       | Filters districts based on selected division in price predictor
| `filterAreas()`         | Filters areas based on selected district
| `predictPrice()`        | Predicts property price using selected inputs and shows results
| `haversine(lat1,lng1,lat2,lng2) | Calculates distance (km between two coordinate points
| `renderNearResults(districts) | Renders a list of nearby properties
| `getNearMe()`           | Uses browser geolocation to find nearby districts
| `showAllNear()`         | Shows all districts sorted by price
| `updateNav(tabName)`     | Highlights active tab in header navigation
| `switchTab(name)`          | Switches between 4 main sections (Predict, Near Me, Insights, Model)
| `buildInsights()`        | Builds the market insights tab with charts & statistics

## Python Backend Functions (app.py)
| Function Name          | What it Does
|-----------------------|--------------------------------
| `haversine(lat1,lng1,lat2,lng2)` | Haversine formula for distance calculation
| `index()`             | Renders main page for Flask
| `predict()`          | API endpoint for price prediction (POST /api/predict)
| `nearby()`            | API endpoint for nearby properties (POST /api/nearby)
| `get_data()`          | API endpoint to get all data (GET /api/data)

## Manual Steps to Run the Project
---

### 1. Run without Flask (Standalone HTML)
1. Open your terminal, navigate to the ML_Project folder.
2. Run this command to start a simple HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Then open your browser and go to: `http://localhost:8000`

### 2. Run with Flask (With Backend)
1. Make sure you have Python installed.
2. Install all dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```bash
   python app.py
   ```
4. Now, open your browser and go to: `http://127.0.0.1:5000`

---

## Features
- Price prediction for properties based on district, area, type, BHK, and area in sqft
- Nearby properties using browser geolocation
- Market insights with charts
- Random Forest machine learning model
- Clean, professional UI with Navy Blue and Sky Blue color scheme

## Machine Learning Model
- Algorithm: `RandomForestRegressor` from `scikit-learn`
- Used because it handles non-linear relationships well, is robust to noisy data, and performs strongly for regression tasks with mixed categorical features after one-hot encoding.
- The model is trained on `Price_Per_SqFt` using location and property-type features so predictions capture variation across districts, areas, and housing types.
