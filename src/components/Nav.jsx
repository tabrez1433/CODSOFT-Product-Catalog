import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useProductContext } from "../context/ProductContext";
import { useCartContext } from "../context/cart_context";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  const [open, setOpen] = useState();
  const { total_item } = useCartContext();
  const { toggle } = useProductContext();

  const Nav = styled.nav`
    .navbar {
      display: flex;
      align-items: center;
    }
    .navbar-lists {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-right: 3rem;
      font-size: 2rem;
      .links {
        text-decoration: none;
        &:hover,
        :visited {
          color: #01bf71 !important;
        }
        &:active {
          border-bottom: 0.4px solid #01bf71;
          transition: 0.5s linear;
        }
      }
    }
    .cart-icon {
      font-size: 3.5rem;
    }
    .icon-suffix {
      position: relative;
      top: -1.9rem;
      left: -1rem;
      background: lightseagreen;
      border-radius: 50%;
      color: #fff;
      font-size: 1.6rem;
      text-align: center;
      padding: 3px;
    }
    .hambar {
      font-size: 2.5rem;
      cursor: pointer;
    }
    .nav-open {
      display: none;
    }
    .nav-close {
      display: none;
    }

    @media only screen and (max-width: ${({ theme }) => theme.media.sm}) {
      .navbar {
        flex-direction: column;
      }
      .navbar-lists {
        display: none;
      }

      .nav-open {
        position: relative;
        display: block;
      }

      .active .navbar-lists {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        order: 0;
        background-color: #fff;
        font-size: 2.5rem;
      }

      .active .nav-open {
        display: none;
      }

      .active .nav-close {
        top: 2.5rem;
        right: 6.5rem;
        z-index: 999;
        position: absolute;
        display: block;
        order: 1;
      }
    }
    @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
      .navbar {
        flex-direction: column;
      }
      .navbar-lists {
        display: none;
      }

      .nav-open {
        position: relative;
        display: block;
      }

      .active .navbar-lists {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        order: 0;
        background-color: #fff;
        font-size: 2.5rem;
      }

      .active .nav-open {
        display: none;
      }

      .active .nav-close {
        top: 2.5rem;
        right: 6.5rem;
        z-index: 999;
        position: absolute;
        display: block;
        order: 1;
      }
    }
  `;

  return (
    <Nav>
      <div className={open ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li className="navbar-items">
            <NavLink to="/" className="links" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
              <NavLink
                to="/cart"
                className="links"
                onClick={() => setOpen(false)}
              >
                <FiShoppingCart className="cart-icon" />
                <span className="icon-suffix">{total_item}</span>
              </NavLink>
            </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Nav;
