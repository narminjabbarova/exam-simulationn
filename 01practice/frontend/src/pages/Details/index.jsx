import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/script";
import axios from "axios";

const Details = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const getProduct = async () => {
    const res = await axios(`${BASE_URL}/api/products/${id}`);
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div>
        {product && <>
          <p>{product.title}</p>
      <span>{product.description}</span>
      <img src={product.imageUrl} alt="" />
        </>}
      
      </div>
    </>
  );
};

export default Details;
