import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const Detail = () => {
  //init
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchDataDetail = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCocktail(data.drinks);
      setLoading(false);
    };
    fetchDataDetail();
  }, []);
  if (loading) {
    return <Loading/>
  }
  if(!cocktail){
    return <h1>No item to display</h1>
  }
   else {
    console.log(cocktail,'get data');
    const { strDrink, strDrinkThumb } = cocktail[0];
    console.log(strDrink);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={strDrinkThumb}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{strDrink}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
