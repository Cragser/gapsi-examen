import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import {useContext, useState} from "react";
import {useProductContext} from "../../context/productsContext";

const Container = styled.div`
  flex: 1;
  padding: 0 16px;
`

const Input = () => {
    const [value, setValue] = useState('');
    const {updateProductsQuery} = useProductContext()


    const onChange = (e: any) => {
        setValue(e.target.value)
        updateProductsQuery(e.target.value)
    }
    return (
        <Container>
            <TextField
                value={value}
                onChange={onChange}
                id="outlined-basic" label="Escribe el producto que te interesa buscar" fullWidth={true} variant="outlined"/>
        </Container>
    )
}

export default Input
