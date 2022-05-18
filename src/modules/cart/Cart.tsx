import styled from "@emotion/styled";
import IconCartWithBadge from "../../components/iconBadge/IconCartWithBadge";

const Container = styled.div`

  border-radius: 4px;
  border: 2px dashed rgba(0, 0, 0, 0.25);;
  margin: 0 auto;
  width: 250px;
  height: 150px;
  padding: 24px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 24px
`
const Cart = () => {
    return (
        <Container>
            <IconCartWithBadge items={3}/>
            Trae tus productos hasta aquí
        </Container>

    )
}
export default Cart
