import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`} className="main-anchor" style={{margin:'2rem',textDecoration:"none"}}>
      <div className="card">
        <figure style={{border:'0px solid grey'}}>
          <img src={image} alt={name}  style={{maxWidth:'100%', height:'auto'}}/>
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-item">
            <h3>{name}</h3>
            <p className="card-price">{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;