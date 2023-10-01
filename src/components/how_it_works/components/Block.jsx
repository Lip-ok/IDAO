import { styled } from "styled-components";
import { colorFetch } from "../../../styles/functions";
import { IconWithText } from "./IconWithText";
import { media } from "../../../styles/media";

import hexagon_green from "../assets/hexagon_green.svg";
import hexagon_empty from "../assets/hexagon_empty.svg";
import mobile_hexagon_green from "../assets/mobile_hexagon_green.svg";
import mobile_hexagon_empty from "../assets/mobile_hexagon_empty.svg";

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 49px 1fr;
  gap: 26px;

  &::before {
    content: "";
    position: absolute;
    top: 54px;
    left: calc(49px / 2);
    width: 1px;
    height: calc(100% - 54px);
    background-color: ${colorFetch("gray3")};
  }

  &.green {
    &::before {
      background-color: ${colorFetch("green")};
    }
  }

  ${media.desktop`
    grid-template-columns: 35px 1fr;
    gap: 10px;

    &::before {
      top: 39px;
      left: calc(34px / 2);
      height: calc(100% - 39px);
    }
  `}
`;

const Number = styled.div`
  width: 49px;
  height: 54px;
  background: url(${hexagon_empty}) center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorFetch("gray3")};

  &.green {
    background: url(${hexagon_green}) center no-repeat;
    color: white;
  }

  ${media.desktop`
    width: 35px;
    height: 39px;
    background: url(${mobile_hexagon_empty}) center no-repeat;

    &.green {
      background: url(${mobile_hexagon_green}) center no-repeat;
    }
  `}
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  min-height: 462px;
  gap: 90px;

  ${media.desktop`
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  `}
`;

const FirstPart = styled.div`
  max-width: 475px;
  margin-bottom: 70px;

  ${media.desktop`
    margin-bottom: 0;
  `}
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  height: 54px;
  color: ${colorFetch("green")};
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;

  ${media.desktop`
    font-size: 15px;
    height: 39px;
  `}
`;

const Title = styled.h3`
  color: ${colorFetch("primary")};
  font-family: Inter;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  margin-bottom: 70px;

  ${media.desktop`
    font-size: 26px;
    margin-bottom: 24px;
  `}
`;

const Description = styled.p`
  color: ${colorFetch("gray1")};
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 22px;

  ${media.desktop`
    font-size: 15px;
    line-height: 150%;
  `}
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SecondPart = styled.div`
  flex: 1;
`;

const Video = styled.video`
  border: 1px solid ${colorFetch("gray4")};
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 640/462;
`;

export const Block = ({ index, label, title, description, list, video }) => {
  return (
    <Wrapper className={`${!index && "green"}`}>
      <Number className={`${!index && "green"}`}>{index + 1}</Number>
      <Content>
        <FirstPart>
          <Label>{label}</Label>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <List>
            {list.map(({ icon, text }) => (
              <IconWithText icon={icon} text={text} />
            ))}
          </List>
        </FirstPart>
        <SecondPart>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </SecondPart>
      </Content>
    </Wrapper>
  );
};
