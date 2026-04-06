import requests
import json
from utils import cetak_header

def ambil_data():
    cetak_header('Memulai Request ke API...')
    response = requests.get('https://jsonplaceholder.typicode.com/todos/1')
    if response.status_code == 200:
        data = response.json()
        with open('data.json', 'w') as f:
            json.dump(data, f, indent=4)
        print('Data berhasil disimpan ke data.json')
    else:
        print('Gagal mengambil data')

if __name__ == '__main__':
    ambil_data()
