import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OrderPlaced = () => {
  const navigate = useNavigate();

  // Redirect to homepage after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/products");
    }, 5000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Wrapper>
      <Content>
        <IconContainer>
          <FaCheckCircle />
        </IconContainer>
        <Title>Your order has been placed successfully!</Title>
        <Message>
          Thank you for your purchase. You will be redirected to the homepage
          shortly.
        </Message>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;

const Content = styled.div`
  text-align: center;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #28a745; /* Green color for success */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

export default OrderPlaced;
