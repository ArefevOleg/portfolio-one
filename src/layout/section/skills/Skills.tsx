import React from 'react';
import styled from "styled-components"
import { FlexWrapper } from '../../../components/Flexwrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from '../../../layout/section/skills/skill/Skill';
import { Container } from '../../../components/slider/Container';



export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap='wrap' justifyContent='space-between'>
        <Skill  iconId={'codeSvg'} 
                title={'React'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'css3Svg'} 
                title={'CSS3'}  description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'reactSvg'} 
                title={'React'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'typeScriptSvg'} 
                title={'TypeScript'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'styledCompSvg'} 
                title={'styled components'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
        <Skill  iconId={'figmaSvg'} 
                title={'WEB DESIgN'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
      </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 40vh;
`;
