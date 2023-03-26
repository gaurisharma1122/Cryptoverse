import { createContext, useContext, useEffect, useReducer } from "react";
import { cryptocurrenciesHeader, newsHeader } from "../headers";
import { reducer } from "./reducer";

export const AppContext= createContext();

const initialState= {
    activeNavLink: 1,
    cryptoData: {},
    cryptocurrencies: [],
    news: []
};


const AppProvider= ({ children })=>{

    const [state, dispatch]= useReducer( reducer, initialState );

    const setActiveNavLink= (id)=>{
        dispatch ({ type: 'SET_ACTIVE_NAVLINK', payload: id });
    };

    const fetchCryptocurrencies= ()=>{
        fetch ('https://coinranking1.p.rapidapi.com/coins?limit=50',
        {
            method: 'GET', 
            headers: cryptocurrenciesHeader
        })
        .then( response=> response.json())
        .then( respData=>{
            dispatch({ type: 'SET_CRYPTODATA', payload: respData.data.stats});
            dispatch({ type: 'SET_CRYPTOCURRENCIES', payload: respData.data.coins});
        });
    };

    const fetchNews= ()=>{
        fetch('https://bing-news-search1.p.rapidapi.com/news/search?count=50&q=cryptocurrency',
        {
            method: 'GET', 
            headers: newsHeader
        })
        .then( response=> response.json() )
        .then( respData=>{
            dispatch({ type: 'SET_NEWS', payload: respData.value });
        });
    };

    return (
        <AppContext.Provider value={{ state, dispatch, setActiveNavLink, fetchCryptocurrencies, fetchNews }}>
            { children }
        </AppContext.Provider>
    );
};
export default AppProvider;

export const useGlobalContext= ()=>{
    return useContext(AppContext);
};