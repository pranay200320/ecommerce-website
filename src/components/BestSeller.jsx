import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItems from "./ProductsItems";

const BestSeller = () => {
  const { products, currency } = useContext(ShopContext);
  // console.log(products)
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="p-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
          {bestSeller.map((item, index) => {
            return (
              <ProductsItems
                key={index}
                currency={currency}
                id={item._id}
                name={item.name}
                image={item.image[0]}
                price={item.price}
              />
            )
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
