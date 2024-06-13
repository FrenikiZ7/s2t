import styled, { css } from 'styled-components';
import { slideOut } from '../../styles/animations';

export const MobileNavContainer = styled.nav`
  ${({ theme }) => css`
     animation: ${slideOut} 500ms;
     background: rgba(0,0,0,0.6);
     position: absolute;
     top: 72px;
     width: 100%;
     z-index: 200;
     padding: ${theme.spacings.large};

     display: none;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: ${theme.spacings.small};

     @media ${theme.medias.tablet} {
       display: flex;
     }
  `}
`;
