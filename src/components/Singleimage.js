import React, { useState } from 'react'
import styled from 'styled-components'

const Singleimage = ({images=[{url:""}]}) => {
    console.log(images);
    const [changeimg,setchangeimg]=useState(images[0]);
   


    const Wrapper = styled.section`
    /* Adjustments for small screens */
    .left-section {
      display: flex;
      flex-direction: column;
    }
  
    .left-section-1 {
      display: flex;
      overflow-x: auto; /* Enable horizontal scrolling if necessary */
    }
  
    .left-section-1 img {
      height: 8rem;
      width: auto; /* Allow image width to adjust based on height */
      margin: 0.8rem;
      cursor: pointer;
    }
  
    .left-section-2 img {
      max-width: 100%; /* Ensure image doesn't overflow its container */
      height: auto; /* Allow image height to adjust based on width */
    }
  
    /* Media query for larger screens */
    @media (min-width: 768px) {
      .left-section {
        flex-direction: row; /* Arrange sections side by side */
        // justify-content:center;
        // text-align:center;
        align-items:center;
      }
  
      .left-section-1 {
        flex-direction: column; /* Stack images vertically */
        overflow-x: hidden; /* Disable horizontal scrolling */
      }
  
      .left-section-1 img {
        height: 8rem; /* Allow image height to adjust based on width */
        width: 10rem;
        margin: 0.2rem 1rem;
      }
  
      .left-section-2 img {
        height: 350px;
        width: 370px; /* Allow image width to adjust based on height */
    //     display:flex;
    //     align-items:center;
    //     text-align:center;
    //     justify-content:center;
    //   }
    }
    @media (max-width: 1080px) {
        .left-section-2 img {
            height: 250px; /* Allow image height to adjust based on width */
            width: 270px;
            margin: 0.2rem 1rem;
          }
      
    }
  `;
  
    return (
    <>
    <Wrapper>
<div className='left-section'>

<div className='left-section-1'>
{images.map((curElem,index)=>{
    return(
        <>
            <div className='left-section-1-in'>
            <img src={curElem.url} alt="images"
            onClick={()=>{setchangeimg(curElem)}}
            ></img>
            </div>
        </>
    )
})}
</div>

<div className='left-section-2'>
<img src={changeimg.url} alt="changeimgkopic"></img>
</div>
</div>
       {/* <h1>hello</h1> */}
       {/* <img src={images[0].url}></img> */}
    </Wrapper>
    </>
  )
}

export default Singleimage