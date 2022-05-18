import styled from "@emotion/styled";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const Container = styled.div`
`

interface CardProductProps {
    image: string,
    name: string,
    price: string,
    description: string,
}

const CardProduct = ({
                         image,
                         name,
                         price,
                         description
                     }: CardProductProps) => {

    return (
        <Container>
            <Card>
                <CardMedia
                    image={image}
                    component="img"
                    height="194"
                />
                <CardContent>
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="h2">{price}</Typography>
                    <Typography variant={"caption"}>{description}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default CardProduct
