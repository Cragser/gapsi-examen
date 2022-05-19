import Header from "./modules/header/Header";
import Cart from "./modules/cart/Cart";
import ListProducts from "./modules/listProducts/ListProducts";
import {ProductContext} from "./context/productsContext";
import useShoppingCart from "./hooks/useShoppingCart";

import './App.css'

function App() {
    const {shoppingCart, addToCart, listProducts, updateProductsQuery} = useShoppingCart();
    return (
        <ProductContext.Provider value={{
            products: listProducts.products,
            updateProductsQuery
        }}>
            <Header/>
            <Cart shoppingCart={shoppingCart.products}/>
            <ListProducts addToCart={addToCart}/>
        </ProductContext.Provider>
    )
}

export default App
