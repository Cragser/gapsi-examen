import {createContext, useContext} from "react";
import {ProductProps} from "../@types/productTypes";

interface ContextProps {
    products: ProductProps[];
    updateProductsQuery: (query: string) => void;
    clearProducts: () => void;
}

const ProductContext = createContext<ContextProps>({
    products: [],
    updateProductsQuery: () => {},
    clearProducts: () => {}
})


const useProductContext = () => {
    return useContext(ProductContext)
}


export {ProductContext, useProductContext}
