import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = (props: any) => {
  return (
    <div className="solo">
      <Link
        to={{
          pathname: `/product/${props.title}`,
        }}
      >
        <img
          className="product-image"
          src={props.image}
          alt={`image of the book ${props.title}`}
        />
      </Link>
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
