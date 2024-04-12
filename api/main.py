#!/bin/env python
import vertexai
from vertexai.preview.generative_models import GenerativeModel
from flask import Flask, render_template
import json
from flask import request, redirect


app = Flask(__name__)

# Initialiser Vertex AI avec votre projet et votre région
PROJECT_ID = "sandbox-mgoulin"
REGION = "us-central1"
vertexai.init(project=PROJECT_ID, location=REGION)
generative_multimodal_model = GenerativeModel("gemini-1.5-pro-preview-0409")

initial_prompt = """
Tu est ingenieur en informatique, 
tu rédiges en langue francaise du code mermaid directement sans le titre,
l'output doit être du code mermaid ce doit être un code valide
tous les graphs doivent être des mindmap, pas de graph LR
indente correctement les lignes en dessous de Root
ta reponse commence par mindmap
Utilise le format ci-dessous sans les parenthèses
"""

@app.route("/api/v1/generateGraph", methods=['POST'])
def generate_prompt():
    graphPrompt = request.get_json()
    prompt = graphPrompt.get("graphPrompt")
    initialGraphDefinition = graphPrompt.get("graphDefinition")
    graphPromptHistory = graphPrompt.get("graphPromptHistory")
    response = generative_multimodal_model.generate_content([initial_prompt] + graphPromptHistory + [ f"sujet:Met a jour le graph ci-dessous avec l'idée suivante ${prompt}", f"${initialGraphDefinition}"])
    response_text = response.candidates[0].content.parts[0].text
    graphDefinition = response_text.replace("```mermaid", "").replace("```", "").replace("Root(", "").replace("(", " ").replace(")","")
    json_response = {
        "graphDefinition": graphDefinition,
        "graphPrompt": prompt,
        "graphPromptHistory": graphPromptHistory + [prompt]
    }
    return json.dumps(json_response)

@app.route("/")
def redirect_index():
    return redirect("/static/index.html")

# 
if __name__ == "__main__":
    app.run("0.0.0.0", port=8080, debug=True)
# Afficher le resultat de generate_content dans la console
