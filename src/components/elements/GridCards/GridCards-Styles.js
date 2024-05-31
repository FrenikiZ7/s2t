import styled, { css } from 'styled-components';
import { ButtonElement } from '../Button/Button-Styles';
import { Title } from '../ImageCard/ImageCard-Styles';
import { slideIn } from '../../../styles/animations';

export const GridCardsContainer = styled.div`
  ${({ theme }) => css`
   width: 100%;
   height: 100%;
   animation: ${slideIn} 500ms ease-out;

   ${ButtonElement} {
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.small};
   }


   ${Title} {

    font-size: ${theme.sizes.small};

    @media ${theme.medias.smallpc} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.xsmall};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xxsmall};
    }
   }

  `}
`;
