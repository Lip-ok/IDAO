import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as IDAOLogoIcon } from "../../assets/images/IDAO_logo.svg";
import { links } from "../../data/data";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { media } from "../../styles/media";
import { ReactComponent as BurgerButtonIcon } from "./assets/burger_icon.svg";
import { ReactComponent as CloseButtonIcon } from "./assets/close_icon.svg";
import { ConnectWalletButton } from "./components/ConnectWalletButton";
import { MobileMenu } from "./components/MobileMenu";
import { useBlockBodyScroll } from "../../utils/useBlockBodyScroll";
import { useMediaType } from "../../styles/style.context";
import { Link } from 'react-scroll'

const Background = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 120px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &.scrolled {
    background-color: rgb(9 54 63 / 80%);
    backdrop-filter: blur(20px);
  }

  ${media.desktop`
    height: 80px;
  `}
`;

const ContentWrapper = styled(GlobalWrapper)`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;

  ${media.desktop`
    justify-content: space-between;
  `}
`;

const StyledIDAOLogoIcon = styled(IDAOLogoIcon)`
  margin-right: 84px;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  gap: 30px;

  ${media.desktop`
    display: none;
  `}
`;

const LinkWrapper = styled.span`
  cursor: pointer;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
`;

const WalletBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const SignIn = styled.span`
  cursor: pointer;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 500;
`;

const StyledConnectWalletButton = styled(ConnectWalletButton)`
  & > svg > path {
    fill: ${colorFetch("primary")};
  }

  ${media.desktop`
    display: none;
  `}
`;

const StyledBurgerButtonIcon = styled(BurgerButtonIcon)`
  cursor: pointer;
`;

const StyledCloseButtonIcon = styled(CloseButtonIcon)`
  cursor: pointer;
`;

export const Header = () => {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const { desktop } = useMediaType();

  useBlockBodyScroll(isOpenMobileMenu);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.currentTarget.scrollY > 50) {
        setVisibleHeader(true);
      } else {
        setVisibleHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Background className={!isOpenMobileMenu && visibleHeader && "scrolled"}>
      <ContentWrapper>
        <StyledIDAOLogoIcon />
        <Links>
          {links.map(({ text, url }) => (
            <LinkWrapper>
                <Link to={url}>{text}</Link>
            </LinkWrapper>
          ))}
        </Links>
        <WalletBlock>
          <SignIn>Войти</SignIn>
          <StyledConnectWalletButton />
          {desktop && (
            <>
              {isOpenMobileMenu ? (
                <StyledCloseButtonIcon
                  onClick={() => {
                    setIsOpenMobileMenu(false);
                  }}
                />
              ) : (
                <StyledBurgerButtonIcon
                  onClick={() => {
                    setIsOpenMobileMenu(true);
                  }}
                />
              )}
            </>
          )}
        </WalletBlock>
      </ContentWrapper>
      <MobileMenu links={links} isOpenMobileMenu={isOpenMobileMenu} />
    </Background>
  );
};
