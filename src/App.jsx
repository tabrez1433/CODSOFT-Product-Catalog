import { createContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import CheckoutPage from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OrderPlaced from "./components/OrderPlaced";
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-placed" element={<OrderPlaced />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      sm: "600px",
      mobile: "768px",
      tab: "998px",
      desktop: "1250px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routing />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
