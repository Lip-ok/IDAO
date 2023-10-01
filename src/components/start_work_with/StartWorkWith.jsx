import { styled } from "styled-components";
import { ButtonState, GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import startWorkWithBackground from "../../assets/backgrounds/start_work_with_background.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/images/arrow_right_small.svg";
import { media } from "../../styles/media";

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledStartWorkWithBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled(GlobalWrapper)`
  z-index: 1;
`;

const Title = styled.h2`
  margin-top: 126px;
  color: ${colorFetch("primary")};
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 72px;

  ${media.desktop`
    margin-top: 70px;
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    line-height: normal;
  `}
`;

const Button = styled(ButtonState)`
  margin: 50px 0 125px;

  ${media.desktop`
    margin: 30px auto 70px;
    padding: 14px 56px;
  `}
`;

const ButtonText = styled.span`
  margin-right: 10px;
  color: ${colorFetch("primary")};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
`;

export const StartWorkWith = () => {
  return (
    <Background>
      <ContentWrapper>
        <Title>Начать работу с IDAO</Title>
        <Button className="border">
          <ButtonText>Подключить кошелек</ButtonText>
          <ArrowRightIcon />
        </Button>
      </ContentWrapper>
      <StyledStartWorkWithBackground src={startWorkWithBackground} />
    </Background>
  );
};
