import styled, { css } from 'styled-components';
import { RowContainer } from '../../components/RowContainer/Row-Styles.js';
import { ButtonElement } from '../../components/elements/Button/Button-Styles.js';
import { fadeIn } from '../../styles/animations.js';
import { SocialLinkElement } from '../../components/elements/SocialLink/SocialLink-Styles.js';
import { TextElement } from '../../components/elements/Text/Text-Styles.js';
import { LinkContainer } from '../../components/elements/StyledLink/StyledLink-Styles.js';
import { NavContainer } from '../../components/Nav/Nav-Styles.js';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles.js';
import { HeaderContainer } from '../../components/Header/Header-Styles.js';

export const HomePage = styled.main`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;

  ${HeaderContainer} {

    ${NavContainer} {
      @media ${theme.medias.tablet} {
      display: none;
     }
    }
  }

  ${IconContainer} {
    display: none;

    @media ${theme.medias.tablet} {
      display: flex;
    }
  }

  ${NavContainer} {
    @media ${theme.medias.mobile} {
      flex-direction: column;
      gap: ${theme.spacings.small};
    }
  }

  ${LinkContainer} {
    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }


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
