import React from 'react'
import styled from 'styled-components'
import Hservices from './Hservices';
import Htrusted from './Htrusted';
import Mainsection from './Mainsection';
import FeatureProduct from './featureProduct.js';
const Home = () => {
  const Wrapper=styled.section``;
  const data={
    name:"SUBEDI STORE",
  }
  return (
    <>
    <Wrapper className='home'><Mainsection myData={data}/></Wrapper>
    <FeatureProduct/>
    <Hservices/>
    <Htrusted/>
    </>
  )
}

export default Home;