import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import heroImage from '../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-column-two">
          <div className="hero-container">
            <p>WELCOME TO</p>
            <h1>E-commerce</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              odit ipsam. Laudantium quo, delectus facere dicta suscipit veniam
              voluptates aliquam!
            </p>
            <NavLink to="/products">
              <Button>SHOW NOW</Button>
            </NavLink>
          </div>
          <div className="images-container">
            <figure>
              <img src={heroImage} alt="hero" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    width: min(100%,950px);
    margin: 3rem auto;
  }
  .hero-container{
     width: min(100%,425px);
    height: 30rem;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    font-size: 1.5rem;
  }
  .images-container{
     width: min(100%,425px);
    height: 30rem;
    img{
      object-fit: cover ;
      width:min(100%,425px) ;
      height: 30rem;
      
    }
  }
`;

export default HeroSection;
