
import React from 'react'
import { useContext,createContext } from 'react'
import { useFilterContext } from '../context/filtercontext';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';
import { Button } from './Button';

const Filtersection = () => {
  const {filters:{text,category,color},updatefiltervalue,all_products,clearfilters}=useFilterContext();
console.log(text);
//unique data of category
  const getuniquedata=(data,property)=>{
let newVal=data.map((curElem)=>{
  return curElem[property];
});
console.log(newVal);
    if (property === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
    //OR
      // newVal = newVal.flat();
    }else{
      return (newVal=["All",...new Set(newVal)]);
    }
  }
  const categoryonlydata=getuniquedata(all_products,"category");
  const companyonlydata=getuniquedata(all_products,"company");
  const colorsonlydata = getuniquedata(all_products, "colors");


  console.log(colorsonlydata);

  return (
    <>
 
    <div className='whole_div' style={{margin:"4rem 0", fontFamily: "Arial, sans-serif", backgroundColor: "#D7DADD", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
      <h1 style={{textAlign:"center"}}>Filters</h1>
 <div style={{margin:"1rem 1rem"}}>  
 <form  onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text" name="text" value={text} onChange={updatefiltervalue} placeholder='Search for items' style={{padding: "10px", border: "2px solid #ccc", borderRadius: "5px", fontSize: "16px", outline: "none", width: "100%",marginBottom:"2rem"}} />
    </form>
</div> 

<div className="filter-category" style={{margin:"1rem 1rem"}}>
         <h3 style={{color: "#333"}}>Category</h3>
         <div>
           {categoryonlydata.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updatefiltervalue}
                style={{backgroundColor: "#f0f0f0", border: "none", padding: "10px", margin: "5px", cursor: "pointer", borderRadius: "5px", color: "#333"}}
                >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

       <div style={{margin:"3rem 1rem"}}>
        <h3 style={{color: "#333"}}>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            onClick={updatefiltervalue}
            style={{padding: "10px", border: "2px solid #ccc", borderRadius: "5px", fontSize: "16px", outline: "none", width: "100%"}}
          >
            {companyonlydata.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
          

       <div className="filter-colors colors" style={{margin:"2rem 1rem"}}>
         <h3 style={{color: "#333"}}>Colors</h3>
         <div className="filter-color-style" >
           {colorsonlydata.map((curColor, index) => {
            if(curColor==="All"){
              return(
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{padding:"10px", height:"50px", backgroundColor: "#f0f0f0", border: "none", borderRadius: "50%", margin: "5px", cursor: "pointer" }}
                onClick={updatefiltervalue}>
                all
                </button>                 
              )
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor,padding:"10px",height:"50px", border: "1px solid black", borderRadius: "50%", margin: "5px", cursor: "pointer" }}
                onClick={updatefiltervalue}>
                {color === curColor ? "" : null}  
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <Button onClick={clearfilters} >
          CLEAR FILTERS
        </Button>
      </div>

    <br />
</div>

</>
  )
}

export default Filtersection