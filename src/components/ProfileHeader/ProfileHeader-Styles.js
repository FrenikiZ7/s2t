import styled, { css } from 'styled-components';
import { slideInRight } from '../../styles/animations';
import { LinkContainer } from '../elements/StyledLink/StyledLink-Styles';

export const ProfileHeaderContainer = styled.header`
  ${({ theme }) => css`
     animation: ${slideInRight} 500ms ease-out;
     animation-fill-mode: forwards; /* Manter o estado final após a animação */
     width: 100%;
     max-width: 1230px;
     border-radius: 10px;
     margin: 0 auto;
     align-content: center;
     background-image: linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.primary});
     transition: background-image 500ms ease-in-out, background-color 500ms ease-in-out;
  
     border: ${theme.borders.white};
     box-shadow: 0px 0px 5px 1px ${theme.colors.white};
     @media (max-width: 1244px) {
      border-radius: 0px;
     }

     @media ${theme.medias.tablet} {
      display: none;
     }

     ${LinkContainer} {
      @media ${theme.medias.smallpc} {
        font-size: ${theme.sizes.small};
      }
     }
  `}
`;
