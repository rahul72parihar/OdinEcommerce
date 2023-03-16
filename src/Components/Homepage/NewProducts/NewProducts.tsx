import React, { useEffect } from "react";
import { getAllRecent } from "../../../../api/firebase";
import ProductCard from "../../Card/ProductCard";
import "./NewProducts.css";
const NewProducts = () => {
  const [data, setData] = React.useState<any>();
  useEffect(() => {
    const promise1 = Promise.resolve(getAllRecent());
    promise1.then((value: any) => {
      setData(value);
    });
  }, []);
  const getRecentProducts = () => {
    return data.map((curr: any) => {
      return (
        <ProductCard
          id={curr.id}
          key={curr.id}
          title={curr.title}
          image={curr.image}
          price={curr.price}
        />
      );
    });
  };
  if (!data) return <></>;
  return (
    <>
      <h1 className="product-header">RECENTLY ADDED</h1>
      <div className="recent-container">{getRecentProducts()}</div>
    </>
  );
};

export default NewProducts;
