from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/')
@app.route('/page/<page_number>')
def main_page(page_number = 1, logged_in=0):
    if int(page_number) == 1:
        api = requests.get('https://swapi.co/api/planets').json()
    elif int(page_number) > 1:
        api = requests.get('https://swapi.co/api/planets' + '/?page=' + str(page_number)).json()
    else:
        api = requests.get('https://swapi.co/api/planets').json()
        page_number = 1
    return render_template('main.html',
                           planets=api['results'],
                           page_number=int(page_number),
                           next_link=api['next'],
                           prev_link=api['previous'],
                           logged_in=logged_in)


if __name__ == '__main__':
    app.run()
