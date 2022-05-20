import {ProductProps} from "../@types/productTypes";

enum CartActionsType {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CLEAR_CART = 'CLEAR_CART',

}

interface CartAction {
    type: CartActionsType;
    payload: ProductProps;
}

interface CartState {
    products: ProductProps[];
}

export const cartReducer = (state: CartState, action: CartAction) => {
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
        case 'CLEAR_CART':
            return {
                ...state,
                products: []
            }
        default:
            return state
    }
}

const actionsCart = (dispatch: Function) => {
    return {
        clearCart: () => dispatch({type: 'CLEAR_CART'}),
        addProductToCart: (product: ProductProps) => dispatch({type: 'ADD_ITEM', payload: product}),
    }
}

export {CartActionsType, actionsCart};
export type {CartState};
export default cartReducer
