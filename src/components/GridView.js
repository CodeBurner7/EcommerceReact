import React from 'react'
import styled from 'styled-components'
import Product from './Product';
import Productgl from './productgl';

const GridView = ({products}) => {
    const Wrapper=styled.section`
    .wrap3col{
        // gap:1rem;
        display:grid;
        gridTemplateColumns:2fr 1fr 1fr;
    }`;
  return (
    <>
    <Wrapper>
        <div className='container wrap3col'>
            {products.map((curElem)=>{
                return<Productgl key={curElem.id}{...curElem}/>;
            })}
        </div>
    </Wrapper>
    </>
  )
}

export default GridView
