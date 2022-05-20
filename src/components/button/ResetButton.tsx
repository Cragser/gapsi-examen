import {Button} from "@mui/material";
import {useProductContext} from "../../context/productsContext";

const ResetButton = () => {
    const {clearProducts} = useProductContext()
    const onClick = () => {
        clearProducts()
    }
    return (
        <Button onClick={onClick} variant="outlined" size={"large"}>Reiniciar aplicación</Button>

    )
}

export default ResetButton
