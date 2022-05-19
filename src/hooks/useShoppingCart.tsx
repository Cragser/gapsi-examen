import {useReducer} from "react";
import cartReducer, {CartActionsType} from "../reducer/cartReducer";
import {ProductProps} from "../@types/productTypes";
import productReducer, {ProductActionsType} from "../reducer/productReducer";
import fetchProduct from "../fetch/fetchProduct";


const productsDefault = [
    {
        image: 'https://picsum.photos/id/1/180/180',
        name: 'Product 1',
        price: '$100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        image: 'https://picsum.photos/id/2/180/180',
        name: 'Product 2',
        price: '$200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        image: 'https://picsum.photos/id/3/180/180',
        name: 'Product 4',
        price: '$100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        image: 'https://picsum.photos/id/4/180/180',
        name: 'Product 3',
        price: '$200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        image: 'https://picsum.photos/id/5/180/180',
        name: 'Product 46',
        price: '$100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        image: 'https://picsum.photos/id/6/180/180',
        name: 'Product 37',
        price: '$200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
]


const useShoppingCart = () => {
    const [shoppingCart, dispatchCart] = useReducer(cartReducer, {
        "products": []
    })
    const [listProducts, dispatchListProduct] = useReducer(productReducer, {
        "products": productsDefault
    });

    const updateProductsQuery = async (query: string) => {
        if (query.length > 5) {
            const response = await fetchProduct(query)
            //...[0].items
            const items = response.item.props.pageProps.initialData.searchResult.itemStacks[0].items;
            const products = items.map((item: any) => {
                return {
                    image: item.image,
                    name: item.name,
                    price: item.price,
                    description: '',
                }
            });

            console.log(products)
        }
    }

    const addToCart = (product: ProductProps) => {
        dispatchCart({type: CartActionsType.ADD_ITEM, payload: product})
        dispatchListProduct({type: ProductActionsType.REMOVE_ITEM, payload: product})
    }

    return {
        shoppingCart,
        addToCart,
        listProducts,
        updateProductsQuery
    }
}

export default useShoppingCart
