

import React, { useContext } from 'react'
// import { Filtercontext } from './Context/Filtercontext'
import {  useFilterContext } from '../context/filtercontext'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";


const Sort = () => {
    const Wrapper=styled.section`
      .active{
          background-color:black;
          color:white;
        }
        .icon{
              padding:2px;
    margin:0 10px;
    font-size:20px;
        }
    `;

  const {filter_products,
    setGridView,setListView,grid_view,sorting,
    sorting_value
  }=useFilterContext();
  // console.log(sorting_value);
  return (
    <>
    <Wrapper>
    <div className='whole_container' style={{display:"flex", justifyContent:"space-between"}}>
     {/* //1st Column */}
     <div>
          <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
     </div>
         {/* //2nd Column */}
   <div>{`${filter_products.length} Products Available`}
   </div>
   {/* //3rd column */}
   <div>
   <form action="#">
     <label htmlFor="sort"></label>
     <select name="sort" id="sort" value={sorting_value} onChange={sorting}>
     {/* <option value="default" disabled selected>Sort By</option> */}
       <option value="lowest">Price(Lowest)</option>
       {/* <option value="#" disabled></option> */}
       <option value="highest">Price(highest)</option>
       {/* <option value="#" disabled></option> */}
       <option value="a-z">(a-z)</option>
       {/* <option value="#" disabled></option> */}
       <option value="z-a">(z-a)</option>
       {/* <option value="#" disabled></option> */}
     </select>
   </form>
   </div>
   </div>
   </Wrapper>
    </>
  )
}

export default Sort
