import React from 'react'
import { Button } from './Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Mainsection = ({myData}) => {
    const {name}=myData;
    const Wrapper = styled.section`
    // background-color:#eee;
    .main-wrap {
        width: 100%;
    }

    .wrap {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 5rem 10rem 0rem 10rem;
        align-items:center;
    }

    .info-section {
        grid-column: 1/2;
        // background-color:red;
        height: auto;
        padding-right: 2rem;

    }

    .info-section h1 {
        font-size: 35px;
    }

    .img-section {
        grid-column: 2/3;
        height: auto;
    }

    .img-section img {
        // background-color:red;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1400px) {
        .wrap {
            padding: 4rem 8rem 0rem 8rem;
        }
    }

    @media (max-width: 1100px) {
        .wrap {
            padding: 3rem 6rem 0rem 6rem;
        }
    }

    @media (max-width: 800px) {
        .wrap {
            padding: 3rem 5rem 0rem 5rem;
        }
        .img-section img {
            // margin-top: -3rem;
            display:none;
        }
        .wrap{
            display:flex;
        }
    }

    @media (max-width: 600px) {
        .wrap {
            padding: 3rem 3rem 0rem 3rem;
            display: block;
        }
        .img-section img {
            margin-top: -1rem;
        }
    }

    @media (max-width: 590px) {
        .wrap {
            padding: 3rem 0rem 1rem 0rem;
        }
        .img-section img {
            // margin-top: 3rem;
            // display:none;
        }
    }
`;
  return (
    <>
    <Wrapper>
    <div className='main-wrap'>
        <div className='wrap'>
            {/* for information section */}
            <div className='info-section'>
            <p><b>Welcome To</b></p>
            <h1>{name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque non quisquam voluptatum dignissimos, alias explicabo molestias, assumenda ea earum dolores consequatur vero aut possimus omnis animi nesciunt temporibus quam sint.
            </p>
            <NavLink>
            <Button>Shop now</Button>
            </NavLink>
            </div>
            {/* for image section */}
            <div className='img-section'>
                <img src="images/homepic.png" alt="img" />
            </div>
        </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Mainsection