
from flask import Flask , abort, request 
import json
import redis
app = Flask(__name__)
r = redis.Redis(host='redis', port=6379, db=0)

@app.route('/set/', methods=['GET','POST']) 
def Setdata():
    data = request.args.to_dict()
    print (data['key'])
    print (data['value'])
    result = r.set(data['key'],data['value'])
    return str(result)+" Data Added"

@app.route('/get/', methods=['GET','POST']) 
def Getdata():
    data = request.args.to_dict()
    print (data['key'])
    result = r.get(data['key'])
    result = result.decode()
    return result


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)








#http://localhost:5000/get/?key=1
#http://localhost:5000/set/?key=1&value=one
#


















"""from flask import Flask , abort, request 
import time 
app = Flask(__name__)

@app.route('/', methods=['GET','POST']) 
def foo():
    data = request.args.to_dict()
    name = data['name']
    return name 
    

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=9000)"""