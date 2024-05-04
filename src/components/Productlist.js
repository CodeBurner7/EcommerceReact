import React, { useContext } from 'react'
import { Filtercontext, useFilterContext } from '../context/filtercontext'
import GridView from './GridView';
import Listview from './Listview';

const Productlist = () => {
  const {filter_products,grid_view}=useFilterContext();
  // const {filter_products}=useContext(Filtercontext);
  console.log(filter_products);
  if (grid_view===true){
    return <GridView products={filter_products}/>;
  }
       else{
    return <Listview products={filter_products}/>;
       }

  return (
    <>
    <h1>productlists...</h1>
    </>
  )
}

export default Productlist

