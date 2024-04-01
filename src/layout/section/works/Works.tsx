import React from 'react';
import styled from "styled-components"
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/Flexwrapper';
import { Work } from './work/Work';
import timerImg from '../../../assets/images/0c92c8a2d9105549989393fee63d52d5.webp';
import socialImg from '../../../assets/images/0f6c9eae25a0122b383d52e1e9a7182e.webp';
import { Container } from '../../../components/slider/Container';
import { TabMenu } from '../../section/works/tabMenu/TabMenu';


const worksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
  return (
    <StyledWorks>
     <Container>
     <SectionTitle>My Works</SectionTitle>
      <TabMenu menuItems={worksItems}/>
      <FlexWrapper justifyContent='space-between' alignItems={'flex-start'} wrap='wrap'>  
      {/*  меняем align-items stretch (значение по умолчанию)  */}
        <Work title={"Social Network"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
              src={socialImg}/>
        <Work title={"Timer"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
              src={timerImg}/>
      </FlexWrapper>
     </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section `
${FlexWrapper} {
  gap: 30px;
}
`