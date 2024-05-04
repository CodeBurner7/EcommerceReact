import React from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cartcontext';
import CartAmount from './CartAmount';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const CartItem = ({id,name,image,color,price,amount}) => {
  const {removeItem,clearcart,SetIncrease,SetDecrease}=useCartContext();
  return (
    <>
    <div className='cart-heading wrap5-col'>
        {/* for image part */}
        <div className='cart-image wrap2-col'>
            <div>
            <figure>
                <img src={image} alt={id}></img>
            </figure>
            </div>

            <div>
                <p>{name}</p>
            <p
              className="color-style"
              style={{ backgroundColor: color, color: color }}>
              </p>
              </div>
        </div>
        {/* for price part*/}
        <div><FormatPrice price={price}/></div>
        {/* for quantity section */}
        <div>
            <CartAmount
            amount={amount}
        SetDecrease={()=>SetDecrease(id)}
        SetIncrease={()=>SetIncrease(id)}/>
        </div>
        {/* for subtotal */}
        <div className="">
        <p>
          <FormatPrice price={price * amount} />
        </p>
        </div>
        {/* for trash section */}
        <div>
        <FaTrash className="remove_icon" onClick={()=>removeItem(id)}/>
      </div>

    </div>
    <hr/>
    </>
  )
}

export default CartItem