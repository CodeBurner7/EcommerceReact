import React,{useContext} from 'react'
import Mainsection from './Mainsection'
import styled from 'styled-components';
import { AppContext } from '../context/productcontext';

const About = () => {

  // const myName=useContext(AppContext);
  const {Namee}=useContext(AppContext);

  const Wrapper=styled.section``;
  const data={
    name:"SUBEDI ECOMMERCE",
  }
  return (
    <>

    {/* {myName} */}
    {Namee}
    
    <Wrapper className='about'><Mainsection myData={data}/></Wrapper>
    </>
  )
}

export default About
