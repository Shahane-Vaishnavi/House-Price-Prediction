# House Price Prediction — Maharashtra Local Dataset

Created by **Vaishnavi Shahane**

## 📌 Project Overview
This project focuses on building a House Price Prediction (HPP) model using a self-created, research-based local Maharashtra housing dataset, specifically centered around the Ambajogai region. Unlike generic public datasets, this dataset captures regional pricing patterns, locality characteristics, and real-world attributes unique to Maharashtra.

The goal is to provide a **more accurate, location-aware price prediction model** for houses across Ambajogai and other cities of Maharashtra..

## 🏡 Dataset Description
The dataset used in this project was **fully created, researched, and compiled by me — Vaishnavi Shahane**. All data points are based on **local Maharashtra housing trends**, collected and structured manually to ensure accuracy and regional relevance.

### Features Included
- City / Location (Pune, Mumbai, Nashik, Nagpur, Sambhaji Nagar,Ambajogai etc.)
- Area (sq ft)
- BHK / Rooms
- Property Type (Flat, Row House, Bunglow, etc.)
- Construction Status (New / Resale)
- Distance to Key Facilities
- Local Market Rate Range
- Price (Target Variable)

### Why a Custom Dataset?
- Public datasets don't reflect **Maharashtra's unique price variations**.
- Local factors like **neighbourhood demand, urban growth, connectivity, and city-specific value zones** strongly influence prices.
- Creating this dataset helps in building a **regionally realistic ML model**.

## 📊 Machine Learning Workflow

### 1. Data Pre-Processing
- Handle missing values
- Categorical encoding
- Outlier removal for high-range city data (like Mumbai)
- Feature scaling

### 2. Model Building
The repository implements a production model using **RandomForestRegressor** from Scikit-Learn with categorical encoding for geographic and property features.

## 📈 Model Performance
The machine learning model was trained using **RandomForestRegressor** from Scikit-Learn and evaluated using regression metrics.

### Evaluation Metrics

| Metric | Value |
|--------|--------|
| MAE (Mean Absolute Error) | 253.09 |
| RMSE (Root Mean Squared Error) | 699.80 |
| R² Score | 0.9488 |

### Interpretation

- The model achieved an **R² Score of 94.88%**, indicating excellent prediction capability.
- Low MAE and RMSE values show that the model predictions are close to actual house prices.
- The model was evaluated using a proper **train-test split** to ensure realistic performance measurement.

### Technologies Used

- Python
- Flask
- Scikit-Learn
- Pandas
- NumPy
- RandomForestRegressor

## 🚀 Features of This Project
- Maharashtra-specific custom dataset
- Clean and reproducible ML pipeline
- Clear preprocessing and feature engineering steps
- Model comparison and final model selection
- Predictive function to estimate house prices

## 📂 Project Structure
```
HPP/
├── data/
│   └── maharashtra_housing_data.csv
├── notebooks/
│   └── HPP_Model_Training.ipynb
├── src/
│   ├── preprocessing.py
│   ├── model.py
│   └── predict.py
├── README.md
└── requirements.txt
```

## 📦 Installation
```bash
git clone <your-repo-link>
cd fodername
pip install -r requirements.txt
```

## 🛡️ Dataset Ownership
This dataset is **100% original and created exclusively by Vaishnavi Shahane**.  
It is not taken from any public source or scraped from existing datasets.  
All entries are manually collected, researched, verified, and structured based on **real Maharashtra housing insights**.

Usage of this dataset in other projects should include proper credit to the creator.

## 🙌 Acknowledgement
This project is fully created and researched by **Vaishnavi Shahane**, using ground-level Maharashtra housing insights.

