import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { spin360Left, spin360Right } from '../../../styles/animations';

export const RateIconsElement = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacings.xsmall};
  

  ${IconContainer} {
    
    animation: ${spin360Left} 1500ms;
    transition: all 500ms ease-in-out;
    animation-fill-mode: forwards;

    &:hover {
      animation: ${spin360Right} 1500ms;
      > svg {
        transform: scale(1);
        box-shadow: 0px 0px 10px 2px ${theme.colors.gold};

     }
  }



  & svg {
    padding: 1px;
  }

  `}
`;
