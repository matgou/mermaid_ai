#!/bin/env python
import vertexai
from vertexai.preview.generative_models import GenerativeModel
from flask import Flask, render_template

app = Flask(__name__)

# Initialiser Vertex AI avec votre projet et votre région
PROJECT_ID = "sandbox-mgoulin"
REGION = "us-central1"
vertexai.init(project=PROJECT_ID, location=REGION)
generative_multimodal_model = GenerativeModel("gemini-1.5-pro-preview-0409")

initial_prompt = """
Tu est ingenieur en informatique, 
tu rédiges en langue francaise du code mermaid directement sans le titre,
tous les graphs doivent être des mindmap, pas de graph LR
input: mindmap
Root
    A
      B
      C
"""

@app.route("/updatePrompt/<prompt>")
def update_prompt(prompt):
    response = generative_multimodal_model.generate_content([initial_prompt, f"sujet:${prompt}"])
    response = response.candidates[0].content.parts[0].text
    return response

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run("0.0.0.0", port=8080, debug=True)
# Afficher le resultat de generate_content dans la console
