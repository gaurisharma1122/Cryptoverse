import { createContext, useContext, useEffect, useReducer } from "react";
import { cryptocurrenciesHeader } from "../headers";
import { reducer } from "./reducer";

export const AppContext= createContext();

const initialState= {
    activeNavLink: 1,
    cryptoData: {},
    cryptocurrencies: []
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

   /* useEffect(()=>{
        fetchCryptocurrencies();
        console.log("Cryptocurrencies:", state.cryptocurrencies);
        console.log("Cryto Data:", state.cryptoData);

    }, []);*/

    return (
        <AppContext.Provider value={{ state, dispatch, setActiveNavLink, fetchCryptocurrencies }}>
            { children }
        </AppContext.Provider>
    );
};
export default AppProvider;

export const useGlobalContext= ()=>{
    return useContext(AppContext);
};