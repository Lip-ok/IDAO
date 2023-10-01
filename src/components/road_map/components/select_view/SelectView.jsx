import { styled } from "styled-components";
import { colorFetch } from "../../../../styles/functions";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as DownloadPdfIcon } from "../../assets/download_pdf.svg";
import example_pdf from "../../assets/example_pdf.pdf";
import { ReactComponent as ArrowSelect } from "../../assets/select_arrow.svg";

import arrow0 from "../../assets/arrow0.svg";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";
import arrow3 from "../../assets/arrow3.svg";
import arrow4 from "../../assets/arrow4.svg";

const Wrapper = styled.div``;

const TitleBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 15px 20px;

  &.background0 {
    background: linear-gradient(180deg, #30cfb0 0%, #34cbb4 100%);
  }

  &.background1 {
    background: linear-gradient(180deg, #34cbb4 0%, #40c0c0 100%);
  }

  &.background2 {
    background: linear-gradient(180deg, #40c0c0 0%, #55afd4 100%);
  }

  &.background3 {
    background: linear-gradient(180deg, #55afd4 0%, #7296f0 100%);
  }

  &.background4 {
    background: linear-gradient(180deg, #7296f0 0%, #7d8efa 100%);
  }
`;

const TitleText = styled.span`
  color: ${colorFetch("primary")};
  text-align: start;
  font-family: HelveticaNeueCyr;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
`;

const StyledArrowSelect = styled(ArrowSelect)`
  transition: all 0.2s;
  &.open {
    transform: rotate(180deg);
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

const ListBlock = styled.div`
  height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &.open {
    height: max-content;
  }
`;

const StageWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 24px;
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

  &:first-child {
    margin-top: 30px;
  }

  &:last-child {
    margin-bottom: 20px;
    &::after {
      display: none;
    }
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

const StageLine = styled.div`
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

export const SelectView = ({
  title,
  list,
  index,
  indexOpenList,
  setIndexOpenList,
}) => {
  const filteredList = list.filter((element) => element.content.text);

  return (
    <Wrapper>
      <TitleBlock
        className={`${"background" + index}`}
        onClick={() =>
          indexOpenList === index
            ? setIndexOpenList(null)
            : setIndexOpenList(index)
        }
      >
        <TitleText>{title}</TitleText>
        <StyledArrowSelect className={index === indexOpenList && "open"} />
        {indexOpenList === index && (
          <Line className={`${"background" + index}`} height={20} />
        )}
      </TitleBlock>
      <ListBlock className={indexOpenList === index && "open"}>
        {filteredList.map(({ content }) => {
          const { text, period_date, first_element } = content;

          return (
            <StageWrapper>
              <Text>{text}</Text>
              <StageLine />
              <Period>
                <CalendarIcon />
                <DateText>{period_date}</DateText>
                <div style={{ flex: 1 }}></div>
                <DownloadPdf href={example_pdf} target="blank">
                  <DownloadPdfIcon />
                </DownloadPdf>
              </Period>
              {indexOpenList === index && first_element && (
                <Arrow className={`arrow${index}`} />
              )}
            </StageWrapper>
          );
        })}
      </ListBlock>
    </Wrapper>
  );
};
