import styled, { css } from 'styled-components';
import { IconContainer } from '../../../../components/elements/IconDiv/IconDiv-Styles';
import { TextElement } from '../../../../components/elements/Text/Text-Styles';
import { GridLayoutContainer } from '../../../../components/GridLayout/GridLayout-Styles';
import { SubtitleElement } from '../../../../components/elements/Subtitle/Subtitle-Styles';
import { BannerSlideWrapper } from '../../../../components/elements/BannerSlide/BannerSlide-Styles';
import { LinkContainer } from '../../../../components/elements/StyledLink/StyledLink-Styles';
import { ButtonElement } from '../../../../components/elements/Button/Button-Styles';

export const PlayerPageContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};

    width: 100%;
    height: 100%;

     ${GridLayoutContainer} {
      width: 70%;
      padding: ${theme.spacings.small};
      grid-gap: ${theme.spacings.large};
    }


    ${BannerSlideWrapper} {
      width: 100%;
      height: auto;
        & img {
        width: 70%;
        border-radius: 12px;
        } 
    }


    ${ButtonElement} {
      font-size: ${theme.sizes.huge};
      padding: ${theme.spacings.small};
    }
  `}
`;

export const Benefits = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%
  `}
`;
