import styled, { css } from 'styled-components';
import { RowContainer } from '../../components/RowContainer/Row-Styles.js';
import { ButtonElement } from '../../components/elements/Button/Button-Styles.js';
import { fadeIn } from '../../styles/animations.js';
import { SocialLinkElement } from '../../components/elements/SocialLink/SocialLink-Styles.js';
import { TextElement } from '../../components/elements/Text/Text-Styles.js';

export const HomePage = styled.main`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;

  ${SocialLinkElement} {
  
  }

  ${TextElement} {
  }

  ${RowContainer} {
    animation: ${fadeIn} 2000ms;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.medium};


    @media ${theme.medias.smallpc} {
      flex-direction: row;
    }

    @media ${theme.medias.mobile} {
      /* flex-direction: column; */
    }

    ${ButtonElement} {
    font-size: ${theme.sizes.medium};
    width: 200px;

    @media ${theme.medias.tablet} {
      width: auto;
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }

    @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.xxsmall};
    }
    }
  }

 

 
  `}
`;
