import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const RankCardContainer = styled.div`
  ${({ theme }) => css`

    height: 120px;
    width: 100%;

    @media ${theme.medias.tablet} {
      height: 100px;
    }

    @media ${theme.medias.mobile} {
      height: 75px;
    }

    &:hover {

      ${RankInfo} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${RankThumbnail} {
        box-shadow: 0px 0px 5px 1px white;
      }
      
    }

  
    & ${LinkContainer} {
      text-align: start;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: ${theme.spacings.small};
      height: 100%;
      width: 100%;
      transition: all 700ms ease-in-out;

      @media ${theme.medias.mobile} {
        flex-direction: column;
      }


      & ${TextElement} {
      color: ${theme.colors.white};
      font-size: ${theme.sizes.small};

      @media ${theme.medias.smallmobile} {
        font-size: ${theme.sizes.xsmall};
      }
      }

      > ${SubtitleElement} {
      color: ${theme.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;
     }


    }
  `}
`;

export const RankInfo = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.5);
    width: auto;
    max-width: 300px;
    height: 50%;
    border-radius: 12px;
    padding: ${theme.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.medias.mobile} {
      width: auto;
    }

    & ${TextElement} {
      font-weight: 600;
    }
  `}
`;

export const RankThumbnail = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 125px;
    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${theme.medias.tablet} {
      height: 100%;
      width: 125px
    }

    @media ${theme.medias.mobile} {
      height: 100%;
      width: 110px
    }
  `}
`;
