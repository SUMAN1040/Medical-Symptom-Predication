import os

list_of_files = [
    "data/medical_dataset.csv",
    "models/rf_model.pkl",
    "notebooks/symptom_prediction.ipynb",
    "src/data_loader.py",
    "src/model_trainer.py",
    "src/predictor.py",
    "src/visualizer.py",
    "public/index.html",
    "app.py",
    "main.py",
    "requirements.txt",
    "README.md"
]

for filepath in list_of_files:
    # Create directory if it doesn't exist
    dirpath = os.path.dirname(filepath)
    if dirpath and not os.path.exists(dirpath):
        os.makedirs(dirpath, exist_ok=True)
        print(f"Created directory: {dirpath}")

    # Create the file if it doesn't exist
    if not os.path.exists(filepath):
        with open(filepath, 'w') as f:
            f.write("")
        print(f"Created file: {filepath}")
    else:
        print(f"File already exists: {filepath}")
