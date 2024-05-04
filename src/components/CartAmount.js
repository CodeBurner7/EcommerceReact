import React from 'react'
import { Button } from './Button'
import { FaMinus,FaPlus } from 'react-icons/fa'

const CartAmount = ({amount,SetIncrease,SetDecrease}) => {
  return (
    <>
    <div style={{display:'flex',gap:'2rem'}}>
        <button onClick={SetDecrease}><FaMinus/></button>
        <h1>{amount}</h1>
        <button onClick={SetIncrease}><FaPlus/></button>
    </div>
    {/* <Button style={{margin:'1rem 0 0 0'}}>Add to Cart</Button> */}
    </>
  )
}

export default CartAmount