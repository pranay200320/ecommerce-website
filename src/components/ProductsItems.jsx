import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"

const ProductsItems = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)
    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                {/* <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" /> */}
                {image && Array.isArray(image) && image.length > 0 ? (
                    <img
                        className="hover:scale-110 transition ease-in-out"
                        src={image[0]} // Access the first image safely
                        alt={name} // Provide a meaningful alt text
                    />
                ) : ('')}
            </div>
            <p className="pt-3 pb-1 text-sm" >{name}</p>
            {price ? (
                <p className="text-sm font-medium">
                    {currency} {price}
                </p>
            ) : ('')}
        </Link>
    )
}

export default ProductsItems