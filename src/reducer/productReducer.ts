import {ProductProps} from "../@types/productTypes";

enum ProductActionsType {
    ADD_ITEMS = 'ADD_ITEMS',
    REMOVE_ITEM = 'REMOVE_ITEM',
    UPDATE_ALL = 'UPDATE_ALL',
    CLEAR_PRODUCT_LIST = 'CLEAR_PRODUCT_LIST'
}

interface CartAction {
    type: ProductActionsType;
    payload: ProductProps[];
}

interface ListProductsState {
    products: ProductProps[];
}

const productReducer = (state: ListProductsState, action: CartAction) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                products: state.products.filter(product => product.name !== action.payload[0].name)
            }
        case 'UPDATE_ALL':
            return {
                products: action.payload
            }
        case 'ADD_ITEMS':
            return {
                ...state,
                products: [...state.products, ...action.payload]
            }
        case 'CLEAR_PRODUCT_LIST':
            return {
                products: []
            }
        default:
            return state
    }
}

const actionsProduct = (dispatch: Function) => {
    return {
        removeItemProductList: (product: ProductProps) => dispatch({type: 'REMOVE_ITEM', payload: [product]}),
        updateAllProductList: (products: ProductProps[]) => dispatch({type: 'UPDATE_ALL', payload: products}),
        addItemProductList: (product: ProductProps) => dispatch({type: 'ADD_ITEMS', payload: [product]}),
        clearProductList: () => dispatch({type: 'CLEAR_PRODUCT_LIST'})
    }
}


export {actionsProduct}
export default productReducer;
