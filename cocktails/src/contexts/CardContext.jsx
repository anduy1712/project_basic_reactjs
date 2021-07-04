import { createContext, useEffect, useReducer } from "react";
import { cardReducer } from "../reducers/CardReducer";
import { GET_DATA, LOADIND_DATA } from "../reducers/type";

export const CardContext = createContext();

const CardContextProvider = ({children}) => {
  //init
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  
  const initState = {
    loading: false,
    cocktails: [],
    loading:false
  }
  //state
  const [state, dispatch] = useReducer(cardReducer, initState);

  //GET DATA WHEN CLIENT FIRST LOAD 
  useEffect(()=>{
    
    const FetchData = async () => {
      dispatch({
        type: LOADIND_DATA
      })
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: GET_DATA,
        payload:{data}
      })
      dispatch({
        type: LOADIND_DATA
      })
    }
    FetchData();
    
  },[])
  const CardContextData = {
    ...state
  }
  return (
    <CardContext.Provider value={CardContextData}> 
      {children}
    </CardContext.Provider>
  )
};

export default CardContextProvider;