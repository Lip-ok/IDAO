import { styled } from "styled-components";
import { GlobalWrapper, ButtonState } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { ReactComponent as ScrollDownIcon } from "../../assets/images/scroll_down.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/images/arrow_right_small.svg";
import backgroundVideo from "../../assets/backgrounds/main_block_video.mp4";
import { media } from "../../styles/media";

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colorFetch("primary")};
`;

const Video = styled.video`
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

const Title = styled.h1`
  max-width: 590px;
  width: 100%;
  color: ${colorFetch("secondary")};
  font-family: Inter;
  font-size: 92px;
  font-weight: 500;
  line-height: 102px;
  margin: 188px 0 0 200px;

  ${media.desktop`
    font-size: 40px;
    line-height: 120%; 
    margin-top: 110px;
    margin-left: 0;
  `}
`;

const Description = styled.p`
  max-width: 415px;
  width: 100%;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  margin: 26px 0 0 200px;

  ${media.desktop`
    font-size: 18px;
    line-height: 150%;
    margin-top: 8px;
    margin-left: 0;
  `}
`;

const Button = styled(ButtonState)`
  margin: 44px 0 164px 200px;

  ${media.desktop`
    padding: 14px 56px;
    margin-top: 16px;
    margin-left: 0;
  `}
`;

const ButtonText = styled.span`
  margin-right: 10px;
`;

const ScrollDown = styled.div`
  margin-bottom: 74px;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  `}
`;

const ScrollDownText = styled.p`
  margin-top: 10px;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  ${media.desktop`
    text-align: center;
  `}
`;

export const Main = () => {
  return (
    <Background>
      <ContentWrapper>
        <Title>Predict, Earn, Trust</Title>
        <Description>
          Прогнозируй цены крипто-активов и зарабатывай с помощью IDAO forecast
        </Description>
        <Button>
          <ButtonText>Whitepaper</ButtonText>
          <ArrowRightIcon />
        </Button>
        <ScrollDown>
          <ScrollDownIcon />
          <ScrollDownText>
            Безопасная
            <br /> финансовая экосистема
          </ScrollDownText>
        </ScrollDown>
      </ContentWrapper>
      <Video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </Background>
  );
};
