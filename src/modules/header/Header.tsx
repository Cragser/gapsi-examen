import Logo from "../../components/logo/Logo";
import styled from "@emotion/styled";
import Input from "../../components/input/Input";
import ResetButton from "../../components/button/ResetButton";

const CustomHeader = styled.header`
  background-color: rgba(232, 232, 232, 0.2);
  display: flex;
  flex-direction: row;
  height: 96px;
  padding: 16px 0;
  align-items: center;
`;

const Header = () => {

    return (
        <CustomHeader className="">
            <Logo/>
            <Input/>
            <ResetButton/>
        </CustomHeader>

    )
}

export default Header
