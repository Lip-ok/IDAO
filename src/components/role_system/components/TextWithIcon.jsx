import { styled } from "styled-components";
import { colorFetch } from "../../../styles/functions";
import { media } from "../../../styles/media";

const Content = styled.div`
  max-width: 640px;
  width: 100%;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 52px 1fr;
  grid-column-gap: 28px;

  ${media.desktop`
    grid-template-columns: 40px 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 16px;
  `}
`;

const Icon = styled.img`
  ${media.desktop`
    width: 40px;
    height: 40px;
  `}
`;

const Title = styled.h3`
  color: ${colorFetch("primary")};
  font-family: "HelveticaNeueCyr";
  font-size: 20px;
  font-weight: 500;

  ${media.desktop`
    align-self: center;
  `}
`;

const Description = styled.p`
  color: ${colorFetch("gray1")};
  font-family: "HelveticaNeueCyr";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  grid-area: 2/2/2/2;

  ${media.desktop`
    grid-area: 2/1/2/span 2;
  `}
`;

export const TextWithIcon = ({ icon, title, description }) => {
  return (
    <Content>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Content>
  );
};
