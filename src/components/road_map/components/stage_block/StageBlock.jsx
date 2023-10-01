import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import { colorFetch } from "../../../../styles/functions";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ContentCard } from "../../enum/enum";
import { ReactComponent as DownloadPdfIcon } from "../../assets/download_pdf.svg";
import example_pdf from "../../assets/example_pdf.pdf";

import arrow0 from "../../assets/arrow0.svg";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";
import arrow3 from "../../assets/arrow3.svg";
import arrow4 from "../../assets/arrow4.svg";

const EmptyPlace = styled.div`
  background-color: transparent;
  height: 132px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LineBlock = styled.div`
  position: relative;
  background-color: transparent;
  height: 132px;
  margin-bottom: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colorFetch("white")};
    opacity: 0.12;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 16px;
    width: 2px;
    left: 50%;
    transform: translate(-50%, 100%);
    background-color: ${colorFetch("white")};
    opacity: 0.12;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 132px;
  padding: 15px 24px;
  margin-bottom: 16px;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    border-radius: 10px;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.12;
    background: ${colorFetch("white")};
  }

  &.bottomLine {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 16px;
      width: 2px;
      left: 50%;
      transform: translate(-50%, 100%);
      background-color: ${colorFetch("white")};
      opacity: 0.12;
    }
  }
`;

const Arrow = styled.div`
  width: 14px;
  height: 11px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);

  &.arrow0 {
    background: url(${arrow0}) center no-repeat;
  }

  &.arrow1 {
    background: url(${arrow1}) center no-repeat;
  }

  &.arrow2 {
    background: url(${arrow2}) center no-repeat;
  }

  &.arrow3 {
    background: url(${arrow3}) center no-repeat;
  }

  &.arrow4 {
    background: url(${arrow4}) center no-repeat;
  }
`;

const Text = styled.p`
  flex: 1;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Line = styled.div`
  margin: 14px 0;
  height: 1px;
  width: 100%;
  background-color: ${colorFetch("secondary")};
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateText = styled.span`
  display: block;
  color: ${colorFetch("secondary")};
  font-family: HelveticaNeueCyr;
  font-size: 16px;
  font-weight: 400;
`;

const DownloadPdf = styled.a`
  transform: translateY(2px);
`;

export const StageBlock = ({ content, index, setCoords }) => {
  const renderStageBlock = (content) => {
    const data = {
      [ContentCard.EMPTY]: (() => <EmptyPlace />)(),
      [ContentCard.LINE]: (() => <LineBlock />)(),
    };

    return data[content];
  };

  const [node, setNode] = useState(null);

  const stageBlockRef = useCallback((node) => {
    if (content.first_element && node !== null) {
      setNode(node.getBoundingClientRect().y);
    }
  }, []);

  useEffect(() => {
    if (node) {
      setCoords((coords) =>
        coords.map((y, indexCoords) => (index === indexCoords ? node : y))
      );
    }
  }, [node]);

  return (
    <>
      {content.text && (
        <Wrapper
          ref={stageBlockRef}
          className={`${content.line_bottom && "bottomLine"}`}
        >
          <Text>{content.text}</Text>
          <Line />
          <Period>
            <CalendarIcon />
            <DateText>{content.period_date}</DateText>
            <div style={{ flex: 1 }}></div>
            <DownloadPdf href={example_pdf} target="blank">
              <DownloadPdfIcon />
            </DownloadPdf>
          </Period>
          {content.first_element && <Arrow className={`arrow${index}`} />}
        </Wrapper>
      )}
      {(content === ContentCard.EMPTY || content === ContentCard.LINE) &&
        renderStageBlock(content)}
    </>
  );
};
