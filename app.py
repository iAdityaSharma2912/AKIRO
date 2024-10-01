from flask import Flask, request, jsonify, render_template
import openai
import os
import speech_recognition as sr
from gtts import gTTS
import pyttsx3

app = Flask(__name__)

# Configure OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Function to generate a response from OpenAI's GPT
def generate_response(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150,
        n=1,
        stop=None,
        temperature=0.7
    )
    return response.choices[0].text.strip()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    prompt = f"KIRO: {user_input}\n"
    response = generate_response(prompt)
    
    # Convert response to speech
    tts = gTTS(text=response, lang='en')
    tts.save("static/response.mp3")
    
    return jsonify({"response": response})

@app.route('/speech-to-text', methods=['POST'])
def speech_to_text():
    audio_file = request.files['file']
    recognizer = sr.Recognizer()
    audio_data = sr.AudioFile(audio_file)
    
    with audio_data as source:
        audio = recognizer.record(source)
    
    try:
        text = recognizer.recognize_google(audio)
    except sr.UnknownValueError:
        text = "Sorry, I could not understand the audio."
    except sr.RequestError:
        text = "Sorry, there was an error with the speech recognition service."
    
    return jsonify({"text": text})

if __name__ == '__main__':
    app.run(debug=True)
