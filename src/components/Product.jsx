
import { NavLink, useNavigate } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";
import { Button } from "../styles/Button";
const Product = (curElem) => {
  
  const { id, name,image, price, category } = curElem;
let navigate = useNavigate();


  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
            
          </div>
         
        </div>
      
        <Button onClick={() => navigate(`/singleproduct/${id}`)}>Buy Now</Button>
             
       
      </div>
    </NavLink>
  );
};

export default Product;
