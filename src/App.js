
import React from 'react'
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//  import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import SingleProduct from './components/Singleproduct';
import Cart from './components/Cart';
import Errorpage from './components/Errorpage';
const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
<ThemeProvider theme={theme}>
<GlobalStyle/>
<Header/>
<Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/products" element={<Products/>}></Route>
   <Route path="/contact" element={<Contact/>}></Route>
   <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route>
   <Route path="*" element={<Errorpage/>}></Route>
</Routes>
<Footer/>
</ThemeProvider>
    </>
  )
}

export default App

