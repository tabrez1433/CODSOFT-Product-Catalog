import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";
const FeatureProduct = () => {
  let navigate = useNavigate();
  const { isLoading, featureProducts, products } = useProductContext();
  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginTop: 250,
          opacity: 0.6,
        }}
      >
        ......Loading{" "}
      </div>
    );
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts?.length !== 0 ? (
            featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })
          ) : (
            <p className="text-center">No Data Found</p>
          )}
        </div>
        <div className="common-heading">Our Products</div>
        <div className="grid grid-three-column">
          {products?.length !== 0 ? (
            products.slice(0, 6)?.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })
          ) : (
            <p className="text-center">No Data Found</p>
          )}
        </div>
        {products?.length > 6 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Button onClick={() => navigate("/products")}>Show More</Button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid lightseagreenn
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: lightseagreenn
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: lightseagreenn
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeatureProduct;
