import React, { useEffect } from 'react'
import {NavLink, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from '../context/productcontext';
import { Container } from './Container';
import Singleimage from './Singleimage';
import FormatPrice from '../Helpers/FormatPrice';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from './Star';
import Addtocart from './Addtocart';
// import Sproduct from './Sproduct';

const API="https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const{getSingleProduct,isSingleLoading,singleProduct}=useProductContext();

const Wrapper = styled.section`
  margin: 5rem 0rem;

  .main-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .image-section,
  .text-section {
    flex: 1 1 400px; /* Minimum width of 400px, maximum width flexes */
    max-width: 100%; /* To ensure images don't overflow */
  }

  .text-section-container {
    margin: 3rem;
    font-size: 22px;
  }

  .text-section-container p {
    padding: 5px 0;
  }

  .product-data-warranty {
    padding: 15px 0;
    display: flex;
    flex-wrap:wrap;
    font-size: 18px;
    gap: 3rem;
  }

  .product-data-info {
    padding: 10px 0;
  }
`;


  const {id}=useParams ();
  // const a=singleProduct.name;
  // alert(a);
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
    useEffect(()=>{
      getSingleProduct(`${API}?id=${id}`);
            //eslint-disable-next-line
    },[]);
 return (
    <>
    <NavLink to={`./`}>Home</NavLink>/{name}
    <Wrapper>
    {/* <Sproduct {...singleProduct} imgs={image}/> 2TAII EKAI THAU MA GARNA MILELNA SO XUTTAI GARAKO */}
  <Container className='container'>
    <div className='main-container'>

    <div className='image-section'>
    <Singleimage images={image}/>
    </div>

    <div className='text-section'>
    {/* <Sproduct {...singleProduct} /> 2TAII EKAI THAU MA GARda*/}
    <div className='text-section-container'>

    <h2 style={{textAlign:'center',padding:'5px'}}>{name}</h2>
            {/* <Star stars={stars} reviews={reviews} /> */}

            <p className="product-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
          
          <hr/>
          
          {stock >0 && <Addtocart product={singleProduct}/>}
    </div>
    </div>

    </div>
  </Container>
    </Wrapper>
    </>
 )
};

export default SingleProduct


