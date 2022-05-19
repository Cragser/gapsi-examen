import styled from "@emotion/styled";
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {ProductProps} from "../../@types/productTypes";
import {motion} from "framer-motion"
import {PointerEvent} from "react";
import {isInside} from "../../util/coordsUtil";

const Container = styled.div`
`

interface CardProductProps extends ProductProps {
    addToCart: (product: ProductProps) => void
}


const CardProduct = (
    {
        image,
        name,
        price,
        description,
        addToCart
    }: CardProductProps
) => {


    return (
        <motion.div
            drag
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.7}}
            initial={true}
            whileDrag={{scale: 0.7, userSelect: "none", cursor: "grabbing"}}
            dragSnapToOrigin={true}
            onDrag={(e) => {
                const cartContainer = document.getElementById('cart-container');
                const productCard = e.target?.closest('.product-card');
                if (cartContainer !== null && productCard !== null) {
                    if (isInside(productCard, cartContainer)) {
                        cartContainer.style.border = '2px dashed #008bff';
                    } else {
                        cartContainer.style.border = '2px dashed #ccc';
                    }
                }

            }}
            onDragEnd={(e) => {
                const cartContainer = document.getElementById('cart-container');
                const productCard = e.target?.closest('.product-card');
                if (cartContainer !== null && productCard !== null) {
                    if (isInside(productCard, cartContainer)) {
                        addToCart({image, price, name, description});
                    }
                }
            }}
            className={'product-card'}
        >
            <Container>
                <Card>
                    <CardMedia
                        image={image}
                        component="img"
                        height="180"
                        width={180}
                        draggable={false}
                    />
                    <CardContent>
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="h3">{price}</Typography>
                    </CardContent>
                    <Button onClick={() => addToCart({image, name, price, description})}>Add to cart</Button>
                </Card>
            </Container>
        </motion.div>
    )
}

export type {CardProductProps}
export default CardProduct
