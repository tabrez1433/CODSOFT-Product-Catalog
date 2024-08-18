import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useProductContext } from "./context/ProductContext";
import { Button } from "./styles/Button";
import { toast } from "react-toastify";
const Contact = () => {
  const { isLoading } = useProductContext();

  // Formik validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Formik form submission handler
  const onSubmit = (values, { resetForm }) => {
     toast.success("We will get back soon")
    resetForm();
  };

  // Formik form
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit,
  });

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
        ......Loading
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error-message">{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error-message">{formik.errors.message}</div>
            ) : null}
          </div>

          <Button type="submit" className="submit-btn">
            Send
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 50px 0;

  .form-container {
    max-width: 500px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 24px;
    }

    .input-field {
      margin-bottom: 20px;

      label {
        display: block;
        font-weight: bold;
        font-size:18px;
        margin-bottom: 5px;
      }

      input,
      textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: #007bff;
          outline: none;
        }
      }

      .error-message {
        color: #dc3545;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`;
export default Contact;
