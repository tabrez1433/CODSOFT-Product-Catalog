import { useFormik } from "formik";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import * as Yup from "yup";
import img from "../src/assets/images/pngwing.jpg";
import { useProductContext } from "./context/ProductContext";

const Login = () => {
  const { setToggle } = useProductContext();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
 
  const initialValues = {
    email: "user@example.com",
    password: "Admin@123",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    const isValidLogin = true;
    if (isValidLogin) {
      localStorage.setItem("loggedInUser", JSON.stringify(values.email));
      toast.success("Login successfully");
      setToggle(true);
      navigate("/products");
      // window.location.href = "/products"
    } else {
      toast.error("Invalid credentials");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Wrapper>
      <div className="register">
        <div className="register-img">
          <figure>
            <img src={img} alt="" />
          </figure>
        
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit} className="form-group">
            <div className={`form-input ${formik.touched.email && formik.errors.email ? "error" : ""}`}>
              <label htmlFor="email">
                <FaUser />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className={`form-input password-input ${formik.touched.password && formik.errors.password ? "error" : ""}`}>
              <label htmlFor="password">
                <FaLock />
              </label>
              <input
                type={showPassword ? "text" : "password"} // Show password if showPassword is true
                name="password"
                placeholder="Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
              {formik.touched.password && formik.errors.password ? (
                <div className="error-message">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="btn-div">
              <input type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .register {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .register-img {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      img {
        height: 400px;
        margin-top: 20px;
      }
      .log {
        font-size: 30px;
        margin: 20px;
      }
    }
    .login-form {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      width: 50%;
      h1 {
        font-size: 6rem;
        opacity: 0.5;
        margin: 10px;
      }
      .form-group {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        input {
          width: 350px;
          margin-bottom: 20px;
          padding-right: 40px; /* Added padding for the eye icon */
        }
      }
    }
  }

  .password-input {
    position: relative;
  }

  .eye-icon {
    position: absolute;
    right: 10px;
    top: 40%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #aaa;
  }

  .form-input {
    position: relative;
  }

  .form-input label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #777;
    font-size: 18px;
  }

  .error {
    input {
      border: 2px solid red;
    }
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 2px;
  }
`;

export default Login;
