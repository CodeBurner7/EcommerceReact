


//check hai namile 2nd natra 1st
import React from "react";
import { useContext,createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
const Filtercontext=createContext();


const initialState={
  filter_products: [],
  all_products: [],
  grid_view:true,
  sorting_value: "lowest",
  filters:{
    text: "",
    category:"All",
    company:"All",
    color: "All",
  },
};

const reducer=(state,action)=>{
switch(action.type){
  case "LOAD_FILTER_PRODUCTS":
  return{
     ...state,
    filter_products:[...action.payload],
    all_products: [...action.payload],
  }
  case "SET_GRID_VIEW":
    return{
      ...state,
      grid_view:true,
    }
    case "SET_LIST_VIEW":
      return{
        ...state,
        grid_view:false,
      }
    case "GET_SORT_VALUE":
      return{
        ...state,
        sorting_value:action.payload,
      }
      case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
      case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

      case "FILTER_PRODUCTS":
        let {all_products}=state;
        let tempFilterProduct=[...all_products];
        const {text,category,company,color}=state.filters;
        if(text){
          tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return curElement.name.toLowerCase().includes(text);
          })
        }

        if(category!=="All"){
          tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return curElement.category===category;
          })
        }
        if(company!=="All"){
          tempFilterProduct=tempFilterProduct.filter((curElement)=>{
            return curElement.company.toLowerCase()===company.toLowerCase();
          })
        }
        if (color!=="All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
        return{
          ...state,
          filter_products:tempFilterProduct,
        }
        case "CLEAR_FILTERS":
          return{
            ...state,
            filters:{
              ...state.filters,
              text: "",
              category:"All",
              company:"All",
              color: "All",
            }
          }
  default:
    return{
      ...state,
    }

}
}


const FilterProvider=({children})=>{

  //getting products from another contextprovider
    const {products}=useProductContext();
  // console.log(products);

  //creating the reducer function
  const [state,dispatch]=useReducer(reducer,initialState);

  //doing the dispath activities
  //for List and Grid view
  const setGridView=()=>{
    return dispatch({ type: "SET_GRID_VIEW" });
    }
  const setListView=()=>{
      return dispatch({ type: "SET_LIST_VIEW" });
      }
  
  //for sorting the products
    // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  //for searching functioinality
  const updatefiltervalue=(event)=>{
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  }

//for clearing the filters
const clearfilters=()=>{
  return dispatch({type:"CLEAR_FILTERS"});
}


  //doing the useffect activities
  //to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS"});
  }, [state.sorting_value,state.filters]);
  //to get products from another context
  useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
  },[products])
  return(
    <>
    <Filtercontext.Provider value={{...state,setGridView,setListView,sorting,updatefiltervalue,clearfilters}}>{children}</Filtercontext.Provider>
    </>
  );
}
 export const useFilterContext=()=>{
    return useContext(Filtercontext);
};

export {Filtercontext,FilterProvider};

