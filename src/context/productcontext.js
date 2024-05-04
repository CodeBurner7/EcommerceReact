import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

//arko component banyera tanna ko lagi yesto gareko tara tyo garda ta milena
//import reducer from "../reducer/productReducer";

const AppContext = createContext();
 const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct:{},
};

// reducer for featureProducts and SingleProducts
const reducer = (state, action) => {
switch (action.type) {
  case "SET_LOADING":
    return {
      ...state,
      isLoading: true,
    };

  case "SET_API_DATA":
    const featureData = action.payload.filter((curElem) => {
      return curElem.featured === true;
    });

    return {
      ...state,
      isLoading: false,
      products: action.payload,
      featureProducts: featureData,
    };

  case "API_ERROR":
    return {
      ...state,
      isLoading: false,
      isError: true,
    };

  case "SET_SINGLE_LOADING":
    return {
      ...state,
      isSingleLoading: true,
    };

  case "SET_SINGLE_DATA":
    return {
      ...state,
      isSingleLoading: false,
      singleProduct:action.payload,
    };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError:true,
      };
  default:
    return state;
}
};

//reducer closed

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  //for featureproducts
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
    //  console.log(res);
      const products = await res.data;
    //  console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  //for singleproductpage
  const getSingleProduct = async (url) => {
    console.log(url);
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res);
      const singleProduct = await res.data;
      console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

