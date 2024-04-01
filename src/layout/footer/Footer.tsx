import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../src/components/icon/Icon';
import { FlexWrapper } from '../../../src/components/Flexwrapper';
import { theme } from '../../../src/styles/Theme';
import { font } from '../../../src/styles/Common';


export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} alignItems={"center"}>
      <Name>Svetlana</Name>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'} 
                  iconId={'instagramSvg'}/>
          </SocialLink>
          </SocialItem>
          <SocialItem>
          <SocialLink>
            <Icon iconId={'telegramSvg'}
                  height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={'vkSvg'}
                  height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={'linkedinSvg'}
                  height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'}/>
          </SocialLink>
        </SocialItem>
      </SocialList>
      <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const SocialList = styled.ul`

  display: flex;
  gap: 20px;
  margin: 30px 0;
  
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
background-color: rgba(255, 255, 255, 0.1);
border-radius: 50%;
height: 35px;
width: 35px;

display: flex;
justify-content: center;
align-items: center;

color: ${theme.colors.accent};

&:hover {
  color: ${theme.colors.primaryBg};
  transform: translateY(-4px);
}
`

const Name = styled.span`
${font({family: "'Josefin Sans', sans-serif", weigth: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;

`;

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  opacity: 0.5;
`;
