import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../api/firebase";
import ProductCard from "../Card/ProductCard";
import "./Search.css";
const Search = () => {
  const searchText: string | undefined = useParams().toSearch;
  const [data, setData] = React.useState<
    {
      category: string;
      description: string;
      id: string;
      image: string;
      pages: number;
      price: number;
      title: string;
    }[]
  >([
    {
      category: "",
      description: "",
      id: "",
      image: "",
      pages: 320,
      price: 448,
      title: "",
    },
  ]);

  useEffect(() => {
    const promise1 = Promise.resolve(getAllProducts());
    promise1.then((value: any) => {
      setData(value);
    });
  }, []);

  function productElement() {
    if (!searchText) {
      return (
        <div>
          <h1>NO RESULT FOUND</h1>
        </div>
      );
    }
    return data.map((curr) => {
      if (!curr.title.toLowerCase().includes(searchText.toLowerCase())) return;
      return (
        <ProductCard
          key={curr.id}
          title={curr.title}
          image={curr.image}
          price={curr.price}
        />
      );
    });
  }
  function capitalizeFirstLetter(string: string | undefined) {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <h1 className="product-header">
        Search : {capitalizeFirstLetter(searchText)}
      </h1>
      <div className="thumb-container">{productElement()}</div>
    </>
  );
};

export default Search;
