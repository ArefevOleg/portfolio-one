import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/Flexwrapper";
import { IconWrapper } from "../skills/skill/Skill";
import { Container } from "../../../components/slider/Container";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} alignItems={"center"}>
          <IconWrapper>
            <Icon iconId={"quoteSvg"} />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 40vh;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`;
