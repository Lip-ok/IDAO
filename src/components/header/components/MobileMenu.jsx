import { styled } from "styled-components";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { colorFetch } from "../../../styles/functions";

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.1s linear;
  background: rgba(9, 54, 63, 0.9);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 110px 16px 50px;

  &.open {
    transform: translateY(0);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
`;

const Link = styled.span`
  cursor: pointer;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 18px;
  font-weight: 500;
`;

export const MobileMenu = ({ links, isOpenMobileMenu }) => {
  return (
    <Modal className={isOpenMobileMenu && "open"}>
      <Links>
        {links.map(({ text }) => (
          <Link>{text}</Link>
        ))}
      </Links>
      <ConnectWalletButton />
    </Modal>
  );
};
