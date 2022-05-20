import styled from "@emotion/styled";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {ProductProps} from "../../@types/productTypes";
import {motion} from "framer-motion"
import {isInside} from "../../util/coordsUtil";

const Container = styled.div`
  .price {
    position: relative;
    display: flex;
  }

  .cent {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.25rem;
  }
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
                const target = e.target as HTMLElement;
                const productCard =target.closest('.product-card') as HTMLElement;
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
                const target = e.target as HTMLElement;
                const productCard = target.closest('.product-card') as HTMLElement;
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
                        height={450}
                        component="img"
                        draggable={false}
                    />
                    <CardContent>
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="h3" className={'price'}>${price}
                            <span className={'cent'}>00</span> </Typography>
                    </CardContent>
                </Card>
            </Container>
        </motion.div>
    )
}

export type {CardProductProps}
export default CardProduct
