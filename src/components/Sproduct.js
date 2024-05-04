
import React, { useState } from 'react'
import styled from 'styled-components'

const Sproduct = (singleProduct) => {
    console.log(singleProduct.image);
    const imga=singleProduct.image;
    const Wrapper = styled.section`
    .main{
        background-color:red;
        padding:5px;
        border:2px solid black;
    }
    .main-product{
        margin:1rem 10rem;
        background-color:yellow;
        display:grid;
        grid-template-columns:repeat(2,1fr);
    }
    .left-section{
        grid-column:1/2;
        background-color:blue;
        text-align:center;
    }
    .right-section{
        grid-column:2/3;
        background-color:green;
        text-align:center;
    }
    `;
  return (
    <>
    <Wrapper>
    <div className='main'>
        <div className='main-product'>
        <div className='right-section'>{singleProduct.company}</div>
        </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Sproduct