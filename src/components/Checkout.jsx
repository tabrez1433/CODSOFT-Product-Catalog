import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import * as Yup from "yup";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../helper/FormatPrice";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f7f6;
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
`;

const ErrorMessageText = styled.div`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Summary = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckoutPage = () => {
  const { total_price, shipping_fee, clearCart } = useCartContext();
  let location = useLocation();
  const discountAmount = location.state;
  let navigate = useNavigate();
  return (
    <>
      <Container>
        <Content>
          <Title>Checkout</Title>
          <Summary className="m-3">
            <SummaryItem>
              <span>Subtotal:</span>
              <FormatPrice price={total_price} />
            </SummaryItem>
            <SummaryItem>
              <span>Shipping Fee:</span>
              <FormatPrice price={shipping_fee} />
            </SummaryItem>
            <SummaryItem>
              <span>Total:</span>
              <FormatPrice
                price={total_price + shipping_fee - discountAmount}
              />
            </SummaryItem>
          </Summary>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              address: "",
              city: "",
              zip: "",
              paymentMethod: "credit_card",
            }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string().required("Full name is required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              address: Yup.string().required("Address is required"),
              city: Yup.string().required("City is required"),
              zip: Yup.string().required("Zip code is required"),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                clearCart();
              }, 400);
              navigate("/order-placed");
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input type="text" name="fullName" />
                  <ErrorMessage name="fullName" component={ErrorMessageText} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" name="email" />
                  <ErrorMessage name="email" component={ErrorMessageText} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" name="address" />
                  <ErrorMessage name="address" component={ErrorMessageText} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" name="city" />
                  <ErrorMessage name="city" component={ErrorMessageText} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input type="text" name="zip" />
                  <ErrorMessage name="zip" component={ErrorMessageText} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select as="select" name="paymentMethod">
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </Select>
                </FormGroup>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Content>
      </Container>
      <ToastContainer />
    </>
  );
};

export default CheckoutPage;
