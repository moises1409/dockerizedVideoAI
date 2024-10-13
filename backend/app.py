from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app)

@app.route("/test", methods=['GET'])
def test():
    logging.debug("A ver que dasale")
    return jsonify({'message': "Todos bien X"})