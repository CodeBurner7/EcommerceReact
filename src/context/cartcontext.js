import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext=createContext();
const getLocalCartData=()=>{
let localCartData=localStorage.getItem("Ecart");
if(localCartData == []){
    return [];
}
else{
    return JSON.parse(localCartData);
}
}
const initialstate={
    //noramally we use cart but for localstorage to get data we do as
    //cart:[],
    //for localstorage
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:50000,
}
const reducer=(state,action)=>{
        // Check if state.cart is null and initialize it to an empty array if so
    if (state.cart === null) {
        state.cart = [];
    }
    if(action.type === "ADD_TO_CART"){
        let {id,color,amount,product}=action.payload;
      
    // tackle the existing product

    let existingProduct = state.cart.find(
        (curItem) => curItem.id == id + color
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id == id + color) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          }
           else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      }

      else{
       //cart ma data pathauni or store garni

       let cartproduct;
       cartproduct={
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock,
       };
       return{
        ...state,
        cart:[...state.cart,cartproduct],
       }
    }

}

    if(action.type === "REMOVE_ITEM"){
        alert("hello from del button");
        let updatedcart=state.cart.filter((curElem)=>curElem.id !== action.payload);
        return{
           ...state,
            cart:updatedcart,
        }
    }
    //to empty or clear the cart
    if(action.type==="CLEAR_CART"){
        return {
            ...state,
            cart:[],
        }
    }
    //to set the increament and decreament
    if(action.type==="SET_INCREAMENT"){
        let updatedProduct=state.cart.map((curElem)=>{
            if(curElem.id == action.payload){
                let increamount=curElem.amount+1;
                //if increament exceeds the limit we have
                if(increamount>= curElem.max){
                    increamount=curElem.max;
                }

                return{
                    ...curElem,
                    amount:increamount,
                }
            }
            else{
                return curElem;
            }

        })
        return{...state,cart:updatedProduct}
    }

    if(action.type==="SET_DECREAMENT"){
        let updatedProduct=state.cart.map((curElem)=>{
            if(curElem.id == action.payload){
                let decreamount=curElem.amount-1;
                //if decreament exceeds the limit we have
                if(decreamount<= 1){
                    decreamount=1;
                }

                return{
                    ...curElem,
                    amount:decreamount,
                }
            }
            else{
                return curElem;
            }

        })
        return{...state,cart:updatedProduct}
    }

    //1...by long individual method for two
    // if(action.type==="TOTAL_CART_ITEMS"){
    //     let updateditemval=state.cart.reduce((initialval,curElem)=>{
    //         let{amount}=curElem;
    //         initialval=initialval+amount;
    //         return initialval;
    //     },0);
    //     return{
    //         ...state,
    //         total_item:updateditemval,
    //     }
    // }
    // if(action.type==="TOTAL_AMOUNT"){
    //     let updatedamountval=state.cart.reduce((initialval,curElem)=>{
    //         let{price,amount}=curElem;
    //         initialval=(initialval+price)*amount;
    //         return initialval;
    //     },0);
    //     return{
    //         ...state,
    //         total_amount:updatedamountval,
    //     }
    // }

    //2...By simplified method
    if (action.type === "CART_ITEM_PRICE_TOTAL") {
        let { total_item, total_amount } = state.cart.reduce(
          (accum, curElem) => {
            let { price, amount } = curElem;
    
            accum.total_item += amount;
            accum.total_amount += price * amount;
    
            return accum;
          },
          {
            total_item: 0,
            total_amount: 0,
          }
        );
        return {
          ...state,
          total_item,
          total_amount,
        };
      }

return state;
}
const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialstate);
    const addToCart=(id,color,amount,product)=>{
        dispatch({type: "ADD_TO_CART",payload:{id,color,amount,product}})
    }
    const removeItem=(id)=>{
        // alert("hello");
        dispatch({type:"REMOVE_ITEM",payload:id})
    }
    //to change the incerease and decrease item on cart
    const SetIncrease=(id)=>{
        dispatch({type:"SET_INCREAMENT",payload:id})
    }
    const SetDecrease=(id)=>{
        dispatch({type:"SET_DECREAMENT",payload:id})
    }
    //to clear the cart
    const clearcart=()=>{
        dispatch({type:"CLEAR_CART"})
    }
    //to add the data in localstorage
    //get vs set
    useEffect(()=>{
        //1..individual long method
        // dispatch({type:"TOTAL_AMOUNT"})
        // dispatch({type:"TOTAL_CART_ITEMS"})

        //2..simplified method
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

        localStorage.setItem("Ecart",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{...state, addToCart,removeItem,clearcart,SetIncrease,SetDecrease}}>{children}</CartContext.Provider>
}
const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider,useCartContext};