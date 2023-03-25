export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_NAVLINK':
            {
                return { ...state, activeNavLink: action.payload };
            };
            break;
        case 'SET_CRYPTODATA':
            {
                return { ...state, cryptoData: action.payload };
            };
            break;
        case 'SET_CRYPTOCURRENCIES':
            {
                return { ...state, cryptocurrencies: action.payload };
            };
            break;
    }
}