import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <>
      <ShopContext.Provider value={value}>
        {/* Think of props.children as a placeholder for anything you put between the opening and closing tags of a component. The component doesn’t need to know what the children are beforehand—it simply renders whatever is passed to it. */}
        {props.children}
      </ShopContext.Provider>
    </>
  );
};
export default ShopContextProvider;
