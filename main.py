from src.data_loader import load_data
from src.model_trainer import train_model
from src.predictor import load_model, predict_disease
from src.visualizer import plot_feature_importance

# Load data
data = load_data("data/medical_dataset.csv")
all_symptoms = data.columns[:-1]

# Train and evaluate model
model = train_model(data)

# Load model and predict
model = load_model()
input_symptoms = ["fever", "cough", "fatigue"]
prediction = predict_disease(model, input_symptoms, all_symptoms)

print("Symptoms:", input_symptoms)
print("Predicted Disease:", prediction)

# Visualization
plot_feature_importance(model, all_symptoms)
