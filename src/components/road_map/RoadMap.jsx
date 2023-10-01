import { useCallback, useState } from "react";
import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { media } from "../../styles/media";
import { useMediaType } from "../../styles/style.context";
import { SelectView } from "./components/select_view/SelectView";
import { StageBlock } from "./components/stage_block/StageBlock";
import { roadMapData } from "./data/data";

const Background = styled.div`
  background-color: ${colorFetch("primary")};
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 150px;
  padding-bottom: 80px;

  ${media.desktop`
    padding-top: 50px;
    padding-bottom: 50px;
  `}
`;

const Title = styled.h2`
  color: ${colorFetch("secondary")};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 60px;

  ${media.desktop`
    font-size: 26px;
    text-align: start;
    margin-bottom: 20px;
  `}
`;

const DesktopColumns = styled.div`
  overflow-y: auto;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(${({cols}) => cols}, minmax(216px, 1fr));
  gap: 20px;

  ${media.desktop`
    display: none;
  `}
`;

const Column = styled.div`
  width: 100%;
`;

const TitleBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 86px;
  white-space: break-spaces;
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: HelveticaNeueCyr;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 52px;

  &.background0 {
    background: linear-gradient(90deg, #30cfb0 0%, #34cbb4 100%);
  }

  &.background1 {
    background: linear-gradient(90deg, #34cbb4 0%, #40c0c0 100%);
  }

  &.background2 {
    background: linear-gradient(90deg, #40c0c0 0%, #55afd4 100%);
  }

  &.background3 {
    background: linear-gradient(90deg, #55afd4 0%, #7296f0 100%);
  }

  &.background4 {
    background: linear-gradient(90deg, #7296f0 0%, #7d8efa 100%);
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 2px;
  height: ${({ height }) => `${height}px`};

  &.background0 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #2ab099 100%
    );
  }

  &.background1 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #2fccb2 100%
    );
  }

  &.background2 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #28b6b5 100%
    );
  }

  &.background3 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #47a3c2 100%
    );
  }

  &.background4 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #6190df 100%
    );
  }
`;

const MobileView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RoadMap = () => {
  const [indexOpenList, setIndexOpenList] = useState(null);

  const [coords, setCoords] = useState([
    { y: null },
    { y: null },
    { y: null },
    { y: null },
    { y: null },
  ]);

  const [node, setNode] = useState(null);

  const titleBlockRef = useCallback((node) => {
    if (node !== null) {
      setNode(
        node.getBoundingClientRect().y + node.getBoundingClientRect().height
      );
    }
  }, []);

  const { desktop } = useMediaType();

  return (
    <Background>
      <ContentWrapper id='roadMap'>
        <Title>Дорожная карта</Title>
        <DesktopColumns cols={3}>
          {roadMapData.map(({ title, list }, index) => (
            <Column>
              <TitleBlock
                ref={titleBlockRef}
                className={`${"background" + index}`}
              >
                {title}
                <Line
                  className={`${"background" + index}`}
                  height={coords[index] - node - 10}
                />
              </TitleBlock>

              {list.map(({ content }) => (
                <StageBlock
                  content={content}
                  index={index}
                  setCoords={setCoords}
                />
              ))}
            </Column>
          ))}
        </DesktopColumns>
        {desktop && (
          <MobileView>
            {roadMapData.map(({ title, list }, index) => (
              <SelectView
                title={title}
                list={list}
                index={index}
                indexOpenList={indexOpenList}
                setIndexOpenList={setIndexOpenList}
              />
            ))}
          </MobileView>
        )}
      </ContentWrapper>
    </Background>
  );
};
