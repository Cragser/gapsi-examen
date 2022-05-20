import {useReducer} from "react";
import cartReducer, {actionsCart, CartActionsType} from "../reducer/cartReducer";
import {ProductProps} from "../@types/productTypes";
import productReducer, {actionsProduct} from "../reducer/productReducer";
import fetchProduct, {fetchProductPagination} from "../fetch/fetchProduct";


const useShoppingCart = () => {
    const [shoppingCart, dispatchCart] = useReducer(cartReducer, {
        "products": []
    })
    const [listProducts, dispatchListProduct] = useReducer(productReducer, {
        "products": []
    });
    const {
        removeItemProductList, updateAllProductList,
        addItemProductList,
        clearProductList
    } = actionsProduct(dispatchListProduct)

    const {
        clearCart,
        addProductToCart
    } = actionsCart(dispatchCart)

    const getProductsFromResponse = (response: any) => {
        const items = response.item.props.pageProps.initialData.searchResult.itemStacks[0].items;
        const names: string[] = [];
            console.log(items)
        return items.reduce((acc: ProductProps[], item: ProductProps) => {
            if (!names.includes(item.name)) {
                names.push(item.name)
                acc.push({
                    image: item.image,
                    name: item.name,
                    price: item.price,
                    description: '',
                })
            }
            return acc
        }, [])
    }

    const updateProductsQuery = async (query: string) => {
        if (query.length > 5) {
            const response = await fetchProduct(query)
            updateAllProductList(getProductsFromResponse(response))
        }
    }

    const addMoreProducts = async (query: string, page: number) => {
        const response = fetchProductPagination(query, page)
        addItemProductList(getProductsFromResponse(response))
    }

    const addToCart = (product: ProductProps) => {
        addProductToCart(product)
        removeItemProductList(product)
    }

    const clearProducts = () => {
        clearProductList()
        clearCart()
    }

    return {
        shoppingCart,
        addToCart,
        listProducts,
        updateProductsQuery,
        addMoreProducts,
        clearProducts
    }
}

export default useShoppingCart
