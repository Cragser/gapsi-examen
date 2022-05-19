import styled from "@emotion/styled";
import IconCartWithBadge from "../../components/iconBadge/IconCartWithBadge";
import {ProductProps} from "../../@types/productTypes";
import {ComponentPropsWithoutRef} from "react";
import {motion} from "framer-motion"

const Container = styled.div`
  .container {
    border-radius: 4px;
    border: 2px dashed rgba(0, 0, 0, 0.25);;
    margin: 0 auto;
    width: 450px;
    height: 250px;
    padding: 24px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 24px
  }
`

interface CartProps extends ComponentPropsWithoutRef<"div"> {
    shoppingCart: ProductProps[]
}

const Cart = ({shoppingCart}: CartProps) => {
    return (
        <Container>
            <motion.div
                id={'cart-container'}
                className="container"
                whileHover={{border: "2px dashed #008bff"}}

            >
                <IconCartWithBadge items={shoppingCart.length ?? 0}/>
                Trae tus productos hasta aquí
            </motion.div>
        </Container>

    )
}
export default Cart
