import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const time=new Date().getFullYear();
    const Wrapper=styled.footer`
    background-color:RGB(45,46,102);
    padding:0.2rem;
    margin:5rem 0 0 0;
    font-size:18px;
    .main-section{
        width:80%;
        margin:auto;
        background-color:#eee;
        border-radius:10px;
    }
    .contact-us{
        margin-top:-2rem;
    }
    .wrap2col{
        padding:1rem 0.5rem;
        display:grid;
        grid-template-columns:repeat(2,1fr);
    }
    .col1{
        grid-column:1/2;
    }
    .col2{
        grid-column:2/3;
        text-align:right;
    }
    .main-footer{
        margin:2rem auto;
        width:75%;
        padding:2rem 0;

    }
    .footer-about{
        grid-column:1/2;
    }
    .footer-subscribe{
        grid-column:2/3;
    }
    .footer-social{
        grid-column:3/4;
    }
    .footer-contact{
        grid-column:4/5;
    }
    .footer-contact a{
        color:white;
        text-decoration:none;
    }
    .footer-social-icons{
        display:flex;
        justify-content:space-evenly;
    }
    .footer-bottom{
        color:white;
        text-align:center;
    }
    .bottom-1{
        grid-column:1/2;
    }
    .bottom-2{
        grid-column:2/3
    }
    @media (max-width: 700px) {
        .main-footer{
            margin:2rem auto;
            width:80%;
            padding:2rem 0;
        }
        .wrap4col{
            display:flex;
            flex-direction:column;
            gap:2rem;
        }
    }
    `;
  return (
    <>
    <Wrapper>
    <section className="main-section">
    <div className="contact-us">
        <div className="wrap2col">
            <div className='col1'>
            <h5>Ready to get started</h5>
            <h5>Talk to us today</h5>
            </div>
            <div className='col2'>
            <NavLink to="/contact"><Button>Get Started
                </Button>
                </NavLink>
            </div>
        </div>
    </div>
    </section>
    {/* main footer */}
    <footer className='main-footer'>
    <div className="main-wrap">
        <div className="wrap4col">
            <div className="footer-about">
                <h5>Hari Subedi</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="footer-subscribe">
                <h5>Subscribe to get important updates</h5>
                <form action="#">
                    <input type="email" placeholder='your-email' />
                    <input type="submit" value="subscribe" />
                </form>
            </div>
            <div className="footer-social">
                <h5>follow us</h5>
                <div className="footer-social-icons">
                    <div>
                    <FaDiscord className='icons'/>
                    </div>
                    <div>
                    <FaInstagram className='icons'/>
                    </div>
                    <div>
                    <FaYoutube className='icons'/>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <h5>Call us</h5>
                <a href="tel:your no">+977-98********</a>
            </div>
        </div>
    </div>
    </footer>
        {/* footer bottom */}
    <div className="footer-bottom">
        <hr />
        <div className="wrap2col">
            <div className='bottom-1'>
            <p>@{time} Hari Subedi All Rights Reserved</p>
            </div>
            <div className='bottom-2'>
                <p>PRIVACY POLICY</p>
                <p>TERMS AND CONDITIONS</p>
            </div>
        </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Footer