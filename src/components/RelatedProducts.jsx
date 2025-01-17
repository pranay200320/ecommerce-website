import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItems from "./ProductsItems";

const RelatedProducts = ({ category, subCategory }) => {
  const { products, currency } = useContext(ShopContext);
  const [realted, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <>
      <div className="my-24">
        <div className="text-3xl text-center py-2">
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {realted.map((item, index) => (
            <ProductsItems
              key={index}
              name={item.name}
              image={item.image[0]}
              price={item.price}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
