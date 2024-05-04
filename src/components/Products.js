import React, { useContext } from "react";
import styled from "styled-components";
import Filtersection from "./Filtersection";
import Productlist from "./Productlist";
import Sort from "./Sort";

import { useFilterContext } from "../context/filtercontext";


const Products = () => {
      const {filter_products}=useFilterContext();
      console.log(filter_products);
      console.log("abc");

  return (
    <Wrapper>
      <div className="container grid grid-filter-column" >
        <div>
          <Filtersection />
        </div>

        <section className="product-view--sort" style={{display:"flex"}}>
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product" >
            <Productlist />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    display: grid;
    grid-template-columns: 0.6fr 3fr; /* Adjusted grid-template-columns */
    gap: 20px; /* Added gap between columns for spacing */
  }
  .product-view--sort {
    display: flex;
    flex-direction: column;
    // align-items: flex-start; /* Align items to the start of the container */
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
