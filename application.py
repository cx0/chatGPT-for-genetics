from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from completer.chat import Chat
from pathlib import Path
import json
import os

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    # Your code

@app.route('/delete_logs', methods=['POST'])
def delete_logs():
    # Your code

@app.route('/', methods=['GET'])
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

application = app
