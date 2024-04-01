import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/slider/Container';
import { FlexWrapper } from '../../../components/Flexwrapper';

export const Slogan = () => {
  return (
    <StyletSlogan>
      <Container>
        <FlexWrapper direction={"column"} alignItems={"center"}>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyletSlogan>
  );
};

const StyletSlogan = styled.section`
  min-height: 40vh;
`