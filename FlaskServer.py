from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/helloWorld/')
def hello_world():
    return 'Hello World!'

@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/movies/")
def getMoviesLisr():
    moviesList = [
        "Pulp Fiction",
        "Wolf of Wall Street",
        "Crash",
        "Social Network",
        "Die Hard"
    ]
    return json.dumps(moviesList)

if __name__ == '__main__':
    app.run()
