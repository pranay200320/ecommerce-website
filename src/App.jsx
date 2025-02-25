import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <>

      <div className="px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]">
        {/* we can add this navbar outside because we can see navbaar in all pages*/}
        <Navbar />
        <SearchBar />

        <Routes>
          {/* we can define the path and element property here */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* use Dynamic Routing ':' */}
          <Route path="/product/:ProductId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/order/:id" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
