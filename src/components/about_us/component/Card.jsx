import { styled } from "styled-components";
import { borderRadiusFetch, colorFetch } from "../../../styles/functions";
import { media } from "../../../styles/media";

const Block = styled.div`
  flex: 1;
  background-color: ${colorFetch("white")};
  padding: 44px 32px;
  border-radius: ${borderRadiusFetch("radius8")};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    align-items: flex-start;
  `}
`;

const Video = styled.video`
  width: 188px;
  height: 188px;
  object-fit: cover;

  ${media.desktop`
    width: 150px;
    height: 150px;
    align-self: center;
  `}
`;

const Title = styled.h3`
  margin-top: 44px;
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-weight: 500;

  ${media.desktop`
    text-align: start;
    margin-top: 24px;
    font-size: 26px;
  `}
`;

const Description = styled.p`
  margin-top: 20px;
  color: ${colorFetch("gray2")};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  ${media.desktop`
    margin-top: 16px;
    font-size: 15px;
    line-height: 150%;
  `}
`;

export const Card = ({ video, title, text }) => {
  return (
    <Block>
      <Video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Title>{title}</Title>
      <Description>{text}</Description>
    </Block>
  );
};
