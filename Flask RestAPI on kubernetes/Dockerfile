FROM python:2.7
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt
RUN sudo apt-get install g++14.0

CMD ["python", "app.py"]
