import styled, { css } from 'styled-components';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';
import { fadeIn, slideIn } from '../../../styles/animations';
import { InfoTitle } from '../InfoInRow/InfoInRow-Styles';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';

export const UserCardElement = styled.div`
  ${({ theme }) => css`
    /* background-image: linear-gradient(to bottom, ${theme.colors.lightsecondary}, ${theme.colors.lightprimary}); */
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    border-radius: 15px;
    animation: ${fadeIn} 1000ms;
    position: relative;

    width: 100%;
    height: 100%;

    transition: all 500ms ease-in-out;



    ${LinkContainer} {
      width: 100%;
      height: 100%;
    }

    ${InfoTitle} {
      font-weight: 600;
    }

    ${SubtitleElement} {
      font-size: ${theme.sizes.xlarge};

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.large};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }


    }

    ${TextElement} {
      user-select: none;
    }



    &:hover {
      box-shadow: 0px 0px 5px 3px white inset;

      & img {
       background: red;
       filter: opacity(0.15);
      }
    }
  `}
`;

export const ProfileImage = styled.img`
  ${({ theme, islocked }) => css`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms ease-in-out;
    filter: opacity(0.3);
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme, islocked }) => css`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};
    position: absolute;
    transition: all 500ms ease-in-out;
  `}
`;
