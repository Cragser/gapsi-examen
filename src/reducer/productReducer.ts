import {ProductProps} from "../@types/productTypes";

enum ProductActionsType {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
}

interface CartAction {
    type: ProductActionsType;
    payload: ProductProps;
}

interface ListProductsState {
    products: ProductProps[];
}

const productReducer = (state: ListProductsState, action: CartAction) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                products: state.products.filter(product => product.name !== action.payload.name)
            }
        default:
            return state
    }
}

export {ProductActionsType}
export type {CartAction}
export default productReducer;
