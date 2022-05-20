import styled from "@emotion/styled";
import CardProduct from "../../components/card/CardProduct";
import {useProductContext} from "../../context/productsContext";

const Container = styled.div`
  margin: 24px;
`


const ListProducts = ({addToCart}: any) => {
    const {products} = useProductContext()

    return (
        <Container className={'container-fluid px-5'}>
            <div className={'row'}>
                {products.map(product => (
                    <div key={product.name} className={'col-12 col-md-6 col-lg-4 col-xl-3 mt-4'}>
                        <CardProduct  {...product} addToCart={addToCart}/>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ListProducts
