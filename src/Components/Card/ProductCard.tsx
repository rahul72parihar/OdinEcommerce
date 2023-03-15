import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ProductCard.css";
const ProductCard = (props: any) => {
  return (
    <div className="solo">
      <img src={props.image} alt={`image of the book ${props.title}`} />
      <div className="title">
        <h4>{props.title}</h4>
      </div>
      <div className="price">
        <h4>₹ {props.price}</h4>
        <button>
          ADD <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
