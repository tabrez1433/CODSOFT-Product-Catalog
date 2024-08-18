import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "../footer.css";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <MainFooter className="footer">
        <footer className="footer-distributed">
          <div className="footer-left">
            <NavLink className="logo" to="/">
              <span className="text1">Dummy</span>
              <span className="text2">Logo</span>
            </NavLink>

            <p className="footer-links">
              <Link to="/" className="link-1">
                Home
              </Link>

              <Link to="/about">About</Link>
             
              <Link to="/contact">Contact</Link>
            </p>

            <p className="footer-company-name">E-commerce Platform © {new Date().getFullYear()}</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Sector-71</span> Mohali, Punjab
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+91 9191919191</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <Link to="mailto:support@company.com" className="text-white" >support@company.com</Link>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div className="footer-icons">
              <div style={{ color: "white" }}>
                <FaDiscord className="icons" />
              </div>
              <div style={{ color: "white" }}>
                <FaInstagram className="icons" />
              </div>
              <div style={{ color: "white" }}>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
        </footer>
      </MainFooter>
    </>
  );
};

const MainFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100vw;

  .logo {
    display: flex;
    border: 2px solid black;
    font-size: 2rem;
    margin: 2rem;
    width: min(100%, 10rem);
    text-align: center;
    text-decoration: none;
    .text1,
    .text2 {
      display: inline-block;
      width: min(100%, 15rem);
      font-weight: bold;
      background-color: #fff;
    }
    .text1 {
      color: #fff;
      background-color: lightseagreen;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.sm}) {
    justify-content: space-around;
    .logo {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    justify-content: space-around;
    .logo {
      margin-left: 0;
    }
  }
`;

export default Footer;
