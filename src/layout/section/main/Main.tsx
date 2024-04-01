import React from 'react';
import styled from "styled-components"
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/Flexwrapper"
import { Container } from '../../../components/slider/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';


export const Main = () => {
  return (
    <Styledmain>
      <Container>
        <FlexWrapper alignItems="center" justifyContent="space-around" wrap='wrap'>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Svetlana Dyablo</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <PotoWrapper>
            <Photo src={photo} alt="" />
          </PotoWrapper>
        </FlexWrapper>
      </Container>
    </Styledmain>
  );
};


const Styledmain = styled.section`
min-height: 100vh;
display: flex;
`

const PotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 65px;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    border: 5px solid ${theme.colors.accent};
    height: 470px;
    width: 360px;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;


  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const MainTitle = styled.h1`
${font({weigth: 400, Fmax: 27, Fmin: 20})};
`
const Name = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weigth: 700, Fmax: 50, Fmin: 36})};
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
position: relative;
z-index: 1;
white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      background-color: ${theme.colors.accent};
      height: 20px;
      width: 100%;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`