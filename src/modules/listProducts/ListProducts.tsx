import styled from "@emotion/styled";
import CardProduct from "../../components/card/CardProduct";
import {useProductContext} from "../../context/productsContext";
import {useRef} from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  grid-gap: 16px;
  margin: 24px 5vw 0;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(180px, 1fr));
  }
`


const ListProducts = ({addToCart}: any) => {
    const {products} = useProductContext()

    return (
        <Container>
            {products.map(product => (
                <CardProduct key={product.name} {...product} addToCart={addToCart}/>
            ))}
        </Container>
    )
}

export default ListProducts
