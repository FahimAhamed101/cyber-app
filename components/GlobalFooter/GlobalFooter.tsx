import { NextPage } from "next/types";
import { PAGE_MAX_WIDTH } from "../../constants";
import BloomingContainer from "../BloomingContainer";
import CyberApeRenderer from "../CyberApeRenderer";
import DiscordIcon from "../DiscordIcon";
import TwitterIcon from "../TwitterIcon";
import {
  CyberApeRendererWrapper,
  Discord,
  GlobalFooterContainer,
  LinksColumn,
  LinksRowContainer,
  SocialsRow,
  Twitter,
} from "./styles";

const GlobalFooter: NextPage = () => {
  return (
    <GlobalFooterContainer>
      <BloomingContainer
        accent="#444"
        customStyles={{
          margin: "5rem auto",
          width: "100%",
          maxWidth: PAGE_MAX_WIDTH,
          position: "relative",
          zIndex: 1,
          padding: "3rem",
          border: "none",
        }}
      >
        <LinksRowContainer>
          <LinksColumn>
            <h1>TRAVEL AROUND</h1>
            <a href="#">TROOP&apos;S HUB</a>
            <a href="#">SHOP</a>
            <a href="#">FAQ</a>
            <a href="#">EXPLORER</a>
          </LinksColumn>
          <LinksColumn>
            <h1>DOCUMENTATION</h1>
            <a href="#">WHITEPAPER</a>
            <a href="#">LICENSE OF AGREEMENT</a>
          </LinksColumn>
          <LinksColumn>
            <h1>SOCIALS</h1>
            <SocialsRow>
              <Twitter href="https://twitter.com/CyberApeAge" target="_blank" rel="noreferrer">
                <TwitterIcon />
                CYBERAPEAGE
              </Twitter>

              <Discord href="https://discord.gg/XSKH5Wcs" target="_blank" rel="noreferrer">
                <DiscordIcon />
                discord
              </Discord>
            </SocialsRow>
          </LinksColumn>
        </LinksRowContainer>

        <CyberApeRendererWrapper>
          <CyberApeRenderer
            size="325px"
            traits={{
              ape: "Black",
              head: "Bunny",
              eyes: "Angry Visor",
              ears: "Neon Earring",
              mouth: "Green NT Mask",
            }}
          />
        </CyberApeRendererWrapper>
      </BloomingContainer>
    </GlobalFooterContainer>
  );
};

export default GlobalFooter;
