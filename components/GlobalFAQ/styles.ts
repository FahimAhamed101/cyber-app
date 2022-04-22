import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../../constants";

export const GlobalFAQContainer = styled.section`
 width:100%;

  background: #151a42;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width:200%;
    gap: 1rem;}

`;

export const GlobalFAQContentWrapper = styled.div`




  display: grid;
  grid-template-columns: 1fr 1fr;

 margin:50px;
  }


  gap: 4rem;
`;

export const FaqItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 1em;
    font-weight: normal;
  }

  p {
    font-size: 1.25rem;
    line-height: 1em;
    opacity: 0.35;
    font-weight: normal;
  }
`;

export const DiscordCTAContainer = styled.section`
  padding: 4rem 0;

  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`;

export const DiscordCTAWrapper = styled.div`
  max-width: ${PAGE_MAX_WIDTH};

  padding: 2rem 0;

  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 1em;
    font-weight: normal;
    color: white;

    margin: 0 0 0.25rem 0;
  }

  p {
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1em;
    color: white;
    opacity: 0.25;
  }
`;

export const LeftWiresSVG = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

export const RightWiresSVG = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`;
