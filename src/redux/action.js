// const addApiCoins = {
//     type: 'ADD_API_COINS',
//     // text: 'Add coins';
//     // payload: {
//     //     coins: []
//     // }
// }

// const addApiId = {
//     type: 'ADD_API_ID',
//     // text: 'Add id';
//     // payload: {
//     //     idCoins: []
//     // }
// }

const addIdCoin = {
    type: 'ADD_API_ID_COIN',
    text: 'Id Coins'
}

const ad = {
    type: 'AD',
    text: 'AD'
}

export function addCoins(data) {
    return {
        type: 'ADD_API_COINS',
        payload: {
            arrCoins: data
        }
    }
}