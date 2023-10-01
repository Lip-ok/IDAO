import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styled from "styled-components";
import {
  AboutUs,
  Footer,
  Header,
  HowItWorks,
  Main,
  RoadMap,
  Tokenomics,
  RoleSystem,
  StartWorkWith,
} from "../components";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <AppWrapper>
      <Header />
      <Main />
      <AboutUs />
      <HowItWorks />
      <RoleSystem />
      <RoadMap />
      <Tokenomics />
      <StartWorkWith />
      <Footer />
    </AppWrapper>
  );
};
