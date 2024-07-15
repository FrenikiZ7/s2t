import styled, { css } from 'styled-components';
import { IconContainer } from '../../../../components/elements/IconDiv/IconDiv-Styles';
import { TextElement } from '../../../../components/elements/Text/Text-Styles';
import { GridLayoutContainer } from '../../../../components/GridLayout/GridLayout-Styles';
import { SubtitleElement } from '../../../../components/elements/Subtitle/Subtitle-Styles';
import { BannerSlideWrapper } from '../../../../components/elements/BannerSlide/BannerSlide-Styles';
import { LinkContainer } from '../../../../components/elements/StyledLink/StyledLink-Styles';

export const PlayerPageContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${GridLayoutContainer} {
      width: 50%;
      padding: ${theme.spacings.medium};
      grid-gap: ${theme.spacings.large};
    }

    ${IconContainer} {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacings.small};
      justify-content: center;
      background: ${theme.colors.darkgray};
      border-radius: 12px;
      padding: ${theme.spacings.xlarge};

      > svg {
        width: 70%;
      }

      &:hover {
        box-shadow: 0px 0px 10px 4px ${theme.colors.gray};
        transform: scale(1.05);

        > svg {
          transform: none;
        }
      }

      ${SubtitleElement} {
        text-align: center;
      }
    }


    ${BannerSlideWrapper} {
      width: 50%;
        & img {
        width: 100%;
        } 
      }
  `}
`;
