import store from '../redux/store';
// import { connect } from 'react-redux';
// import { addApiCoins, addApiId } from '../redux/action';

export function ApiRequestCoinsInfo(address) {

    const URL = `http://localhost:5000/${address}`;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COINS',
                payload: {
                    arrCoins: data,
                }
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

export function ApiRequestCoinsId(id) {
    const URL = `http://localhost:5000/coins/${id}`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_ID',
                payload: {
                    IdCoin: data,
                }
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// запрос по инпуту
export function ApiRequestListCoinsSearchInput(input) {
    let URL = `http://localhost:5000/coin/${input}`;
    input === '' ? URL = 'http://localhost:5000/coins' : URL = `http://localhost:5000/coin/${input}`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COINS',
                payload: {
                    arrCoins: data,
                }
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}