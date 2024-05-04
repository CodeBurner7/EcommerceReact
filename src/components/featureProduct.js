import styled from "styled-components";
import Product from "./Product";
import { useProductContext } from "../context/productcontext";
// import { GlobalStyle } from "../GlobalStyle";
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ...Loading </div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="wrap3col">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  .container {
    width: 80%;
    margin:auto;
    background-color: ${({ theme }) => theme.colors.bg};
    padding:2rem 1rem;
    border-radius:20px;
    }
  figure{
    width:auto;
    display: flex;
    overflow:hidden;
    position: relative;

      img {
          width: 90%;
          margin: 1.5rem auto;
          height: 20rem;
          // transition: all 0.2s linear;
        }
          .caption {
              position: absolute;
              top: 15%;
              right: 10%;
              background-color: ${({ theme }) => theme.colors.bg};
              border-radius:20px;
              padding: 0.5rem 1.2rem;
              font-size: 1.2rem;
      }
  }
  .card-data{

  }
  .card-data-item{
    padding:5px 10px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    color:black;
    text-decoration:none;
  }
  .wrap3col a{
    text-decoration:none;
  }
  /* Media Queries */
  @media (max-width: 768px) {
    .container {
      width: 90%;
    }

    .wrap3col {
      // justify-content: center;
      display:flex;
      flex-wrap:wrap;
    }
  }

  @media (max-width: 576px) {
    .container {
      padding: 1rem;
    }

 `;

export default FeatureProduct;