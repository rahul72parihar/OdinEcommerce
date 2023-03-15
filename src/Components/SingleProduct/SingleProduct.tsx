import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../../api/firebase";
import "./SingleProduct.css";
const SingleProduct = () => {
  const productId: string | undefined = useParams().productid;
  const [data, setData] = React.useState<any>();
  useEffect(() => {
    const promise = Promise.resolve(getOneProduct(productId));
    promise.then((value: any) => {
      setData(value[0]);
    });
    console.log(data);
  }, []);
  if (!data)
    return (
      <div>
        <h1>Product Not found</h1>
      </div>
    );
  else
    return (
      <div className="single-container">
        <div className="single-left">
          <img src={data.image} alt={`image of book ${data.title}`} />
        </div>
        <div className="single-right">
          <h1>{data.title}</h1>
          <h1>₹ {data.price}</h1>
          <button className="single-add-cart">
            ADD <AiOutlineShoppingCart />
          </button>
          <div className="extra-details">
            <div className="pages-detail">
              <h1>
                <HiOutlineBookOpen />
              </h1>
              <h2>: {data.pages} Pages</h2>
            </div>
            <h2>Category : {data.category.toUpperCase()}</h2>
          </div>
          <h3>{data.description}</h3>
        </div>
      </div>
    );
};

export default SingleProduct;
