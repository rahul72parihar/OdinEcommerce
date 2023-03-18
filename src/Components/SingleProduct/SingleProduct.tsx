import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { addProduct, getOneProduct } from "../../../api/firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import "./SingleProduct.css";
const SingleProduct = () => {
  const productId: string | undefined = useParams().productid;
  const [data, setData] = React.useState<any>();
  useEffect(() => {
    const promise = Promise.resolve(getOneProduct(productId));
    promise.then((value: any) => {
      setData(value[0]);
    });
  }, []);
  const { user }: any = useUserAuth();
  const handleAddProduct = async (title: string, image: any, price: any) => {
    await addProduct(user.uid, title, image, price);
    document.location.reload();
  };
  if (!data) return <></>;
  else
    return (
      <div className="single-container">
        <div className="single-left">
          <img src={data.image} alt={`image of book ${data.title}`} />
        </div>
        <div className="single-right">
          <h1>{data.title}</h1>
          <h1>₹ {data.price}</h1>
          <button
            className="single-add-cart"
            onClick={() => handleAddProduct(data.title, data.image, data.price)}
          >
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
