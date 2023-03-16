import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBanner } from "../../../../api/firebase";
import "./Banner.css";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";

const Banner = () => {
  const [array, setData] = React.useState<any>();
  useEffect(() => {
    const promise1 = Promise.resolve(getAllBanner());
    promise1.then((value: any) => {
      setData(value);
    });
  }, []);
  const navigate = useNavigate();
  const handleNavigation = (title: string) => {
    navigate(`/product/${title}`);
    console.log("navigate", title);
  };
  const [index, setIndex] = useState(0);

  const plus = () => {
    setIndex((prevIndex) => {
      if (prevIndex === array.length - 1) return 0;
      else return prevIndex + 1;
    });
  };
  const minus = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) return array.length - 1;
      else return prevIndex - 1;
    });
  };
  if (!array) return <></>;
  return (
    <div className="banner">
      <div className="banner__image">
        {array.map((curr: any) => (
          <div
            className="banner__i"
            key={curr.title}
            style={{
              backgroundImage: `url(${curr.image})`,
              transform: `translateX(-${index * 100}%)`,
            }}
            onClick={() => handleNavigation(curr.title)}
          >
            <h2>{curr.title}</h2>
          </div>
        ))}
      </div>
      <div className="arrow">
        <div onClick={minus}>
          <FiChevronLeft />
        </div>
        <div onClick={plus}>
          <FiChevronRight />
        </div>
      </div>
      <div className="dot">
        {array.map((curr: any, dotNumber: any) => (
          <div
            key={dotNumber}
            className={dotNumber === index ? "highlighted-dot" : ""}
            onClick={() => setIndex(dotNumber)}
          >
            <GoPrimitiveDot key={dotNumber} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
