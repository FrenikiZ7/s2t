import styled, { css } from 'styled-components';

export const BannerContainer = styled.div`
  ${({ theme }) => css`
   background: linear-gradient(
   to bottom,
   rgba(0, 0, 0, 0),
   rgba(0, 0, 0, 1)
   ),
   url('/assets/images/backgrounds/slider-bg-1.png');

   height: 500px;
   width: 100%;

   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;


    @media ${theme.medias.smallpc} {
      height: 350px;
    }

    @media ${theme.medias.tablet} {
      height: 300px;
    }

    @media ${theme.medias.mobile} {
      height: 250px;
    }
  `}
`;
