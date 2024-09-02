from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/centro-oeste')
def centro_oeste():
    return render_template('cidades_centro_oeste.html')

@app.route('/nordeste')
def nordeste():
    return render_template('cidades_nordeste.html')

@app.route('/norte')
def norte():
    return render_template('cidades_norte.html')

@app.route('/sudeste')
def sudeste():
    return render_template('cidades_sudeste.html')

@app.route('/sul')
def sul():
    return render_template('cidades_sul.html')

if __name__ == '__main__':
    app.run(debug=True)
