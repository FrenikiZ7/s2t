import styled, { css } from 'styled-components';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';
import { fadeIn, slideIn } from '../../../styles/animations';
import { InfoTitle } from '../InfoInRow/InfoInRow-Styles';

export const ProposalCardElement = styled.div`
  ${({ theme }) => css`
    background-image: linear-gradient(to bottom, ${theme.colors.lightsecondary}, ${theme.colors.lightprimary});
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    border-radius: 15px;
    animation: ${fadeIn} 1000ms;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};

    width: 100%;
    height: 100%;
    padding: ${theme.spacings.large};

    transition: all 500ms ease-in-out;

    ${LinkContainer} {
      font-size: ${theme.sizes.large};

      @media ${theme.medias.mobile} {
       font-size: ${theme.sizes.medium};
      }

      @media ${theme.medias.smallmobile} {
       font-size: ${theme.sizes.small};
      }
    }

    ${InfoTitle} {
      font-weight: 600;
    }



    &:hover {
      box-shadow: 0px 0px 5px 3px white inset;
    }
  `}
`;

export const ProposalDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
  `}
`;

export const ProposalImage = styled.img`
  ${({ theme }) => css`
    width: 80px;
    transition: all 300ms ease-in-out;

    @media ${theme.medias.mobile} {
      width: 60px;
    }
  `}
`;

export const ProposalText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    user-select: none;

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.small};
    }

    & span {
        margin-left: 5px;
      }
  `}
`;

export const ProposalTitle = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.sizes.xlarge};
    user-select: none;

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.large};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.medium};
    }

    @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;
