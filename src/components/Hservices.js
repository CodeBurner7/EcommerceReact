import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
import styled from 'styled-components';
const Hservices = () => {
    const Wrapper=styled.section`
    .main-wrap{
        margin:2rem 0rem;

    }
    .wrap3col{
        gap:3rem;
        margin:2rem 10rem;
    }
    .service1{
        grid-column:1/2;
        background-color:#eee;
        border-radius:20px;
        padding:2rem;
    }
    .service2{
        grid-column:2/3;
        background-color:#eee;
        border-radius:20px;
        padding:2rem;
    }
    .service3{
        grid-column:3/4;
        background-color:#eee;
        border-radius:20px;
        padding:2rem;
    }
    @media (max-width: 1000px) {
        .wrap3col{
            margin:2rem 8rem;
        }
    }
    @media (max-width: 800px) {
        .wrap3col{
            margin:2rem 5rem;
        }
    }
    @media (max-width: 600px) {
        .wrap3col{
            margin:2rem 1rem;
        }
    }
        @media (max-width: 500px) {
        .wrap3col{
            margin:2rem 0rem;
        }
    }
    `;

  return (
    <>
    <Wrapper>
        <div className='main-wrap'>
            <div className="wrap3col">
            <div className="service1">
                <div className='icon1'><TbTruckDelivery/></div>
                <h5>Super Fast and Free Delivery</h5>
            </div>
            <div className="service2">
                <div><MdSecurity/>
                <h5>Non-Contact Shipping</h5>
                </div>
                <div>
                    <GiReceiveMoney/>
                    <h5>Money-back Guarranted</h5>
                </div>
            </div>
            <div className="service3">
                <RiSecurePaymentLine/>
                <h5>Super Secure Payment System</h5>
            </div>
            </div>
        </div>
    </Wrapper>
    </>
  )
}

export default Hservices