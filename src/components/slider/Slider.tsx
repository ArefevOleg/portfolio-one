import React from 'react';
import styled from "styled-components"
import { FlexWrapper } from '../Flexwrapper';
import { theme } from '../../styles/Theme';

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
      <Slide>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
        <Name>@ivan ivanow</Name>
      </Slide>
      </FlexWrapper>
        <Pagination>
        <span></span>
        <span className={'active'}></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
`

const Name = styled.div`
font-family: 'Josefin Sans', sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
margin: 22px 0 42px;
display: inline-block;
`

const Pagination = styled.div`


span {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);

  & + span {
    margin-left: 5px;
  }

  &.active {
    background-color: ${theme.colors.accent};
    width: 20px;
  }
}

`