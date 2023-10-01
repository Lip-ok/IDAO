import { styled } from "styled-components";
import { ReactComponent as WalletIcon } from "../../../assets/images/wallet.svg";
import { ButtonState } from "../../../styles/common-components";

const Button = styled(ButtonState)``;

const ButtonText = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const ConnectWalletButton = ({ ...props }) => {
  return (
    <Button className="border white" {...props}>
      <WalletIcon />
      <ButtonText>Подключить кошелек</ButtonText>
    </Button>
  );
};
