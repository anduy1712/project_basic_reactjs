import React,{createContext, useContext,useState,useEffect} from 'react';

export const CardContext = createContext();

const CardContextProvider = ({children}) => {

    
    //state
    const [cards,setCards] = useState([]);

    const url = 'https://course-api.com/react-tours-project';
    
    const fetchTours = async () => {
        try {
          const response = await fetch(url)
          const tours = await response.json()
          
          setCards(tours);
        } catch (error) {
          
          console.log(error)
        }
      }
    
    
    useEffect(()=>{
        fetchTours();
    },[])
    //methods
    const deleteCard = (id) => {
        const newCards = cards.filter(card =>{
            return card.id != id;
        })
        setCards(newCards);
    }
    const refresh = () => {
        fetchTours();
    }
    //Data 
    const cardContextData = {
        cards,deleteCard,refresh
    }
    
    return (
        <CardContext.Provider value={cardContextData}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider