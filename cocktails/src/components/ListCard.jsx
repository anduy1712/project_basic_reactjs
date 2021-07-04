import React,{useContext} from "react";
import { CardContext } from '../contexts/CardContext'
import ItemCard from "./ItemCard";
import Loading from "./Loading";
const ListCard = () => {
  const {cocktails,loading} = useContext(CardContext);
  const itemCard = cocktails.map(item => {
    return <ItemCard key={item.id} id={item.id} name={item.name} img={item.image} desc={item.info} glass={item.glass}/>
  })
  if(loading) {
    return <Loading/>
  }
  else {
    return (
      <div>
        <div className="container" style={{marginTop: 50 + "px"}}>
          <div className="row">
            {itemCard}
          </div>
        </div>
      </div>
    );
  };
  }
  

export default ListCard;
