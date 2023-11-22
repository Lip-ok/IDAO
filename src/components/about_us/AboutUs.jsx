import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { Card } from "./component/Card";
import { colorFetch } from "../../styles/functions";
import { media } from "../../styles/media";

import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    146deg,
    ${colorFetch("secondary")} 25%,
    rgba(235, 245, 244, 0.49) 100%
  );
`;

const ContentWrapper = styled(GlobalWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    align-items: flex-start;
  `}
`;

const Title = styled.h2`
  margin-top: 130px;
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;

  ${media.desktop`
    margin-top: 50px;
    text-align: start;
    font-size: 26px;
    font-weight: 600;
  `}
`;

const Description = styled.p`
  margin-top: 30px;
  max-width: 878px;
  width: 100%;
  color: ${colorFetch("gray1")};
  text-align: center;
  font-family: "HelveticaNeueCyr", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  ${media.desktop`
    margin-top: 16px;
    text-align: start;
    font-size: 15px;
    font-weight: 400;
    line-height: 150%;
  `}
`;

const Cards = styled.div`
  margin: 100px 0 114px;
  display: flex;
  gap: 34px;

  ${media.desktop`
    margin: 24px 0 50px;
    flex-direction: column;
    gap: 16px;
  `}
`;

export const AboutUs = () => {
  const cards = [
    {
      video: video1,
      title: "IDAO forecast",
      text: "Позволяет делать прогнозы относительно цены актива за вознаграждение (токены IDAO) и рейтинг (статус).",
    },
    {
      video: video2,
      title: "IDAO trust",
      text: "Позволяет выбрать стратегию инвестирования и передать средства в доверительное управление с целью получения прибыли.",
    },
    {
      video: video3,
      title: "IDAO vote",
      text: "Позволяет держателям токенов IDAO совместно принимать ключевые решения и влиять на будущее протокола IDAO.",
    },
  ];

  return (
    <Background>
      <ContentWrapper id='whatIs'>
        <Title>О нас</Title>
        <Description>
        IDAO – это децентрализованная автономная организация с открытым кодом на базе блокчейна Ethereum для внедрения инвестиционных блокчейн-решений.
        </Description>
        <Cards>
          {cards.map(({ video, title, text }) => (
            <Card video={video} title={title} text={text} />
          ))}
        </Cards>
      </ContentWrapper>
    </Background>
  );
};
