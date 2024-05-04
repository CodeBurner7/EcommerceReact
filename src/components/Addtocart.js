
import React, { useContext, useState } from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartcontext';
import { Button } from './Button';

const Addtocart = ({product}) => {
    const {addToCart}=useCartContext();
    const {colors,id,stock}=product;
    const [color,setColor]=useState(colors[0]);
    const [amount,setAmount]=useState(1);

    const savecolor=(akocolor)=>{
        setColor(akocolor);
        // alert(akocolor);
    }
    const SetIncrease=()=>{amount<stock ? setAmount(amount+1): setAmount(amount)}
    const SetDecrease=()=>{amount>1 ? setAmount(amount-1):setAmount(amount)}
  return (
    <>
    <div>Colors</div>
    <hr />
{    colors.map((curColor,index)=>{
    return <button style={{backgroundColor:curColor,margin:'0 2rem',borderRadius:'50%',padding:'5px'}} key={index} onClick={()=>savecolor(curColor)}>{curColor == color ?'✓':''}</button>
    })}

     {/* Add to cart */}
     <div style={{display:'flex',gap:'2rem'}}>
        <button onClick={SetDecrease}><FaMinus/></button>
        <h1>{amount}</h1>
        <button onClick={SetIncrease}><FaPlus/></button>
    </div>
        {/* button thapeko haii yeha */}
    <NavLink to="/cart" 
    onClick={()=>addToCart(id,color,amount,product)}
    >
    {/* button thapeko haii yeha */}
    <Button style={{margin:'1rem 0 0 0'}}>Add to Cart</Button>
    </NavLink>
    </>
  )
}

export default Addtocart

