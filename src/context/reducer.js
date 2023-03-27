export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            {
                return { ...state, isLoading: action.payload };
            }
        case 'SET_OPEN_NAVBAR':
            {
                return { ...state, openNavbar: action.payload };
            }
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
        case 'SET_NEWS':
            {
                return { ...state, news: action.payload };
            };
            break;
        
    }
}