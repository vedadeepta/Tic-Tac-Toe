from flask import Flask, request, render_template,jsonify
#from LookAhead import minimax

app = Flask(__name__,static_url_path='')

@app.route("/")
def root():
    return render_template('index.html')

@app.route("/_compute_pos")
def compute():
	c=0
	a = request.args.get('a',type=str)

	#for i in a:
	#	c=c+1

	return jsonify(r=a)

if __name__ == "__main__":
    app.run(debug=True)