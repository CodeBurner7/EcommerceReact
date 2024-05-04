import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {RiSecurePaymentLine} from "react-icons/ri";

const Htrusted = () => {
    const Wrapper=styled.section`
    .main-wrap{
        margin:2rem 0rem;
        height:10rem;
        background-color:#eee;

    }
    .wrap{
        display:flex;
        gap:5rem;
        padding:2rem 10rem;
        text-align:center;
        justify-content:center;
        font-size:30px;
    }
    .wrap-p{
        text-align:center;
        padding:10px 0px;
    }
    `;
  return (
    <>
    <Wrapper>
    <div className="main-wrap">
        <h5 className='wrap-p'>Trusted by 1000+ Companies</h5>
        <div className="wrap">
            <NavLink to={'/about'}><RiSecurePaymentLine/></NavLink>
            <NavLink><RiSecurePaymentLine/></NavLink>
            <NavLink><RiSecurePaymentLine/></NavLink>
            <NavLink><RiSecurePaymentLine/></NavLink>
            <NavLink><RiSecurePaymentLine/></NavLink>
        </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Htrusted