import styled from "styled-components";
import { HeroTroopRendererWrapperProps } from "./types";

export const HeroTroopContainer = styled.section`
  width: 100%;

  display: flex;
  position: relative;
`;

export const HeroTroopRendererWrapper = styled.div<HeroTroopRendererWrapperProps>`
  position: absolute;
  bottom: 0;
  left: ${({ centerTranslation }) =>
    `calc(50% - ${centerTranslation ? centerTranslation : "0px"})`};
  transform: translateX(-50%);
  z-index: ${({ zIndex }) => zIndex};
`;
