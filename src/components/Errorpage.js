import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
const Errorpage = () => {
        const Wrapper=styled.section`
.container{
    text-align:center;
    margin:5rem;
}
        `;

  return (
    <>
    <Wrapper>
        <div className="container">
            <div>
                <h1>404</h1>
                <h3>UH OH! You're lost</h3>
                <p>The page you are looking for doesnt exist.You can go to home page by clicking the button below.</p>
                <NavLink to="/"><Button>Home Page</Button></NavLink>
            </div>
        </div>
    </Wrapper>
    </>
  )
}

export default Errorpage