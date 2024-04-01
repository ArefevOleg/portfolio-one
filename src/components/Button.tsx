import styled from 'styled-components';
import { theme } from '../styles/Theme';


export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
    height: 100%;
    width: 100%;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: ${theme.colors.accent};
    height: 10px;
    width: 50%;
    bottom: 0;
    left: 50%;                    // для выравнивания по центру
    transform: translateX(-50%); // для выравнивания по центру
    z-index: -1;
  }
`;