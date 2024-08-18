import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import { useCartContext } from "./context/cart_context";
import FormatPrice from "./helper/FormatPrice";
import { Button } from "./styles/Button";

const Cart = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  let navigate = useNavigate();
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
 
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const applyCoupon = () => {
    const couponCodes = couponCode.split(/[,\s]+/);
    let totalDiscount = 0;

    // Iterate through each coupon code and apply the discount
    couponCodes.forEach((code) => {
      const couponDiscount = validateCouponAndGetDiscount(code);
      if (couponDiscount > 0) {
        totalDiscount += couponDiscount;
      } else {
        // Handle invalid coupon
        toast.error(`Invalid coupon code: ${code}`);
      }
    });

    // Set the total discount amount
    setDiscountAmount(totalDiscount);
  };

  const validateCouponAndGetDiscount = (couponCode) => {
    // Placeholder function to validate coupon code and return discount amount
    if (couponCode === "SAVE10") {
      return 10; // $10 discount
    } else if (couponCode === "GET20OFF") {
      return 20; // $20 discount
    } else if (couponCode === "SALE15") {
      return 15; // $15 discount
    } else {
      return 0; // No discount
    }
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    toast.success(`Copied ${code} to clipboard`);
  };
  if (cart?.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item </h3>
      </EmptyDiv>
    );
  }
  return (
    <Wrapper>
      <ToastContainer />
      <Container>
        <CartHeading className="grid grid-five-column">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </CartHeading>
        <hr />
        <CartItemWrapper>
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </CartItemWrapper>
        <hr />

        {/* Coupon Code Input and Apply Button */}
        <CouponSection>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Button onClick={applyCoupon}>Apply</Button>
        </CouponSection>

        {/* Coupon Codes */}
        <CouponCodes>
          <div>
            <p>Coupon Code 1:</p>
            <p>SAVE10</p>
            <button onClick={() => copyToClipboard("SAVE10")}>Copy</button>
          </div>
          <div>
            <p>Coupon Code 2:</p>
            <p>GET20OFF</p>
            <button onClick={() => copyToClipboard("GET20OFF")}>Copy</button>
          </div>
          <div>
            <p>Coupon Code 3:</p>
            <p>SALE15</p>
            <button onClick={() => copyToClipboard("SALE15")}>Copy</button>
          </div>
        </CouponCodes>
        {/* Display Discounted Total */}
        {discountAmount > 0 && (
          <DiscountInfo>
            <p>Coupon Applied: {couponCode}</p>
            <p>
              Discount: <FormatPrice price={discountAmount} />
            </p>
          </DiscountInfo>
        )}

        {/* Order total_amount */}
        <OrderTotalWrapper>
          <OrderTotalSubdata>
            <div>
              <p>Subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>Shipping Fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>Order Total:</p>
              <p>
                <FormatPrice
                  price={total_price + shipping_fee - discountAmount}
                />
              </p>
            </div>
          </OrderTotalSubdata>
        </OrderTotalWrapper>
        <CartButtonWrapper>
          <NavLink
            to="#"
            onClick={(e) => {
              e.preventDefault()
              if (!loggedInUser) {
                navigate("/login");
              } else {
                navigate("/checkout",{state: discountAmount});
              }
            }}
          >
            <Button>Continue Shopping</Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            Clear Cart
          </Button>
        </CartButtonWrapper>
      </Container>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const CartHeading = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #777;
  }

  .cart-hide {
    display: none;
  }
`;

const CartItemWrapper = styled.div`
  margin-bottom: 2rem;
`;

const CartButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const CouponSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.5rem;
    margin-right: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const DiscountInfo = styled.div`
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;

const OrderTotalWrapper = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 2rem;
`;

const OrderTotalSubdata = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  div {
    text-align: right;
  }
`;

const CouponCodes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  div {
    border: 1px solid #ccc;
    padding: 1rem;
    flex: 1;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0.5rem 0;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
  }
`;

export default Cart;
