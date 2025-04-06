from flask import Flask, render_template
import pandas as pd

# ✅ Specify custom template folder
app = Flask(__name__, template_folder='public', static_folder='public/static')

@app.route('/')
def index():
    # Load CSV
    df = pd.read_csv("data/medical_dataset.csv")
    
    # Convert DataFrame to HTML table
    table_html = df.to_html(classes='data', index=False)

    # Render the HTML page with the table
    return render_template("index.html", table=table_html, title="Medical Dataset")

if __name__ == '__main__':
    app.run(debug=True)