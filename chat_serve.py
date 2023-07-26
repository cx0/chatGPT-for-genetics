from flask import Flask, request, jsonify
from flask_cors import CORS
from completer.chat import Chat
from pathlib import Path
import json

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    print(f"Received message: {user_input}")
    chat = Chat()
    response = chat.interpret(user_input)
    print(f"Sending response: {response}")
    return jsonify({'response': json.dumps(response)}) 

@app.route('/delete_logs', methods=['POST'])
def delete_logs():
    folders = ['suggestions', 'results', 'interpretations']
    for folder in folders:
        path = Path(f'logs/{folder}')
        files = path.glob('*.json')
        for file in files:
            file.unlink()
    return jsonify({'response': "Deleted all log files"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
