import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

const ItemCard = ({id,name,desc,glass,img}) => {
    
    return (
        <div className="col-lg-3 col-md-3 mb-4">
            <div className="card" >
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  {desc}
                </p>
                <Link to={`/Detail/${id}`} className="btn btn-primary">Detail</Link>
                
              </div>
            </div>
          </div>
    )
}

export default ItemCard
