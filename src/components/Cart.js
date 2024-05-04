import React from 'react'
import { useCartContext } from '../context/cartcontext'
import styled from 'styled-components';
import CartItem from './CartItem';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Cart = () => {
  const{clearcart,total_amount,shipping_fee}=useCartContext();
  
  const Wrapper = styled.section`
  margin: 5rem 1rem;

  .container {
    border: 2px solid black;
    margin: 0 auto;
    padding: 1rem;
    max-width: 800px;
  }

  .wrap5-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.5rem;
  }

  .class-heading {
    padding: 0.5rem 0;
    font-weight: bold;
    text-align: center;
  }

  .cart-item {
    margin-top: 1rem;
  }
  figure img{
      height:3rem;
      width:3rem;
    }

  .buttons-incart {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .buttons-incart > * {
    flex: 1;
    margin-bottom: 0.5rem;
  }

  .totals {
    margin-top: 1rem;
    text-align: center;
  }
`;

  const{cart}=useCartContext();
  let cartcontent=useCartContext().cart;
  console.log(cartcontent);

  //if cart is empty after clearcart
  if(cart.length=== 0){
    return<>
    <h3>No Items In Cart</h3>
    </>
  }
  return (
    <>
    <Wrapper>
      <div className='container'>
        <div className='class-heading wrap5-col'>
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        <hr/>
        <div className='cart-item'>
          {
            cart.map((curElem)=>{
              return <CartItem key={curElem.id}{...curElem}/>;
            })
          }
        </div>
      </div>
      {/* //two different butons */}
      <div className='buttons-incart' style={{display:"flex",justifyContent:"space-between"}}>
      <NavLink to="/products"><Button>Continue Shopping</Button></NavLink>
      <Button onClick={clearcart}>Clear Cart</Button>
    </div>
      {/* //two different butons */}
      {/* for total amount,shipping_fee.. */}
          <div className=''>
            <div><p>Subtotal:<FormatPrice price={total_amount}/></p></div>
            <div><p>Shippingfee:<FormatPrice price={shipping_fee}/></p></div>
            <div><p>Amounttotal:<FormatPrice price={total_amount+shipping_fee}/></p></div>
          </div>
      {/* for total amount,shipping_fee.. */}

    </Wrapper>
    </>
  )
}

export default Cart

