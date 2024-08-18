import styled from "styled-components";
import imag1 from "../assets/images/pngwing.com (23).png"
import imag2 from "../assets/images/pngwing.com (24).png"
import imag3 from "../assets/images/pngwing.com (25).png"
import imag4 from "../assets/images/User.png"
import imag5 from "../assets/images/pngwing.com (26).png"

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src={imag1}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={imag2}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={imag3}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={imag4}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={imag5}
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    img{
min-width: 6rem;
height: 6rem;
    }
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img{
min-width: 6rem;
height: 6rem;
    }
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
