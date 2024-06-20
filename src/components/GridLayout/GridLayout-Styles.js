import styled, { css } from 'styled-components';

export const GridLayoutContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacings.xxsmall};

    @media ${theme.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }

    @media ${theme.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    @media ${theme.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
  `}
`;

export const ItemContainer = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 200px;
    margin: 0 auto;

    @media ${theme.medias.smallpc} {
      width: 160px;
      height: 160px;
    }

    @media ${theme.medias.tablet} {
      width: 140px;
      height: 140px;
    }

    @media ${theme.medias.mobile} {
      width: 90px;
      height: 90px;
    }
  `}
`;
