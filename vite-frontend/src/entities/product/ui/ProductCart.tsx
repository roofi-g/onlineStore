import Cart from "../../../app/assets/icons/cart.svg";
import { useAddToCartMutation, useGetCartQuery } from "../../cart/index"
import { useState } from "react";
import { CatalogPriceDisplay } from "../../catalog/ui/CatalogPriceDisplay";
import { useActiveCategory } from "../../catalog/model/useActiveCategory";
import { selectAvailableSizes } from "../../../features/catalog/filter/model/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCart({ product }) {
    const { activeCategory } = useActiveCategory();
    const sizes = useSelector(state => selectAvailableSizes(state, activeCategory));

    const normalizedProduct = product.sizes.map(s => s.toString().toUpperCase());
    const displayedSizes = sizes.filter(size =>
        normalizedProduct.includes(size)
    );
    
    const [addToCar] = useAddToCartMutation();
    const { data: cart = [] } = useGetCartQuery();
    const [show, setShow] = useState(false);

    const cartItem = cart.filter(item => item.productId === product.id);
    const cartSizes = cartItem.map(item => item.size);

    function handleAddToCart(productId, size, price, discount) {
        const existing = cart.find(item => item.productId === productId && item.size === size);

        if (!existing) {
            addToCar({
                id: String(Date.now()),
                productId,
                size,
                price,
                discount,
                quantity: 1
            });
        }
    }

    return (
        <Link to={`${product.id}/`} className="w-80">
            <div className="relative w-full h-110 overflow-hidden">
                <img className="w-full h-full object-cover" src={product.image} alt="product-img" />
                <div className="absolute bottom-3 w-full px-2">
                    {!show ? (
                        <button
                            onMouseEnter={() => setShow(true)}
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/40 hover:bg-white/80"
                        >
                            <img className="w-4 h-4 object-contain" src={Cart} alt="корзина" />
                        </button>
                    ) : (
                        <div
                            className="py-1 bg-white/80"
                            onMouseLeave={() => setShow(false)}
                        >
                            <p className="text-sm text-center">Выберите размер</p>
                            <div className="flex justify-center gap-2">
                                {displayedSizes
                                    .map(size =>
                                        <div key={size}>
                                            <button
                                                className={`${cartSizes.includes(size) ? "bg-white/100" : ""} pl-2 pr-2 hover:bg-white/100`}
                                                onClick={() => handleAddToCart(product.id, size, product.price, product.discount)}
                                            >{size}</button>
                                        </div>
                                    )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div  className="p-2 mb-5">
                <p className="uppercase text-sm font-medium tracking-wide">{product.name} {product.id}</p>
                <CatalogPriceDisplay price={product.price} discount={product.discount} />
                {product.isHot && <p className="text-xs">HIT</p>}
            </div>
        </Link>
    )
}
