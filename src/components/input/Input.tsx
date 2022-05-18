import {TextField} from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  padding: 0 16px;
`

const Input = () => {
    return (
        <Container>
            <TextField id="outlined-basic" label="Outlined" fullWidth={true} variant="outlined"/>
        </Container>
    )
}

export default Input
