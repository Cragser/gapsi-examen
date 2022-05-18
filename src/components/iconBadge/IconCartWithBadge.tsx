import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;

  .badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    padding: 8px 10px;
  }
`

const IconCartWithBadge = ({items}: any) => {
    return (
        <Container>
            <i className="fa-solid fa-4x fa-cart-shopping">
            </i>
            <span className="badge">{items}</span>
        </Container>
    )
}

export default IconCartWithBadge
