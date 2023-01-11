from flask import Flask, request, jsonify
import pandas as pd
from sklearn import linear_model
import numpy as np
from flask_cors import CORS, cross_origin
import json


df = pd.read_csv("naregaon-data-csv_1.csv")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/postapi", methods=['POST'])
def postspi():
    # record = json.loads(request.data)
    # a = "hello"
    # return {"postapi":a}
    request_data = request.get_json()
    input = request_data['input']
    loc = request_data['loc']
    year = request_data['year']  # idhar hi karo use woh function

    reg = linear_model.LinearRegression()
    print(df.iloc[:, :-1])
    reg.fit(df.iloc[:, :-1], df.per)
    predict = reg.predict([[int(year), int(loc), int(input)]]).round()
    fpred = predict.tolist()

    return{"members": fpred}


@app.route("/members")
@cross_origin()
def members():
    reg = linear_model.LinearRegression()
    print(df.iloc[:, :-1])
    reg.fit(df.iloc[:, :-1], df.per)
    predict = reg.predict([[2022, 101, 24000]]).round()
    fpred = predict.tolist()
    return{"members": fpred}


if __name__ == "__main__":
    app.run(debug=True)
