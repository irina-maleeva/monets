const initialState = {
    arrCoins: [],
    idCoin: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_COINS':
            const apiCoins = action.payload.arrCoins;
            const newArrCoins = [...state.arrCoins, apiCoins];
            return { ...state, arrCoins: newArrCoins };
            break;
        case 'ADD_API_ID':
            const apiId = action.payload.idCoin;
            const newIdCoin = [...state.idCoin, apiId];
            return { ...state, idCoin: newIdCoin };
            break;
        default:
            return state;
    }
}

export default reducer;