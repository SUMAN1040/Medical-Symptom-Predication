import joblib
import pandas as pd

def load_model(path='models/rf_model.pkl'):
    return joblib.load(path)

def predict_disease(model, input_symptoms, all_symptoms):
    input_data = [1 if symptom in input_symptoms else 0 for symptom in all_symptoms]
    return model.predict([input_data])[0]
