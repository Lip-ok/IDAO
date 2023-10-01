import { styled } from "styled-components";
import { colorFetch } from "../../../styles/functions";

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
`;

const Text = styled.span`
  color: ${colorFetch("primary")};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 500;
`;

export const IconWithText = ({ icon, text }) => {
  return (
    <Content>
      <Icon src={icon} />
      <Text>{text}</Text>
    </Content>
  );
};
