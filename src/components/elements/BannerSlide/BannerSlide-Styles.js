import styled, { css } from 'styled-components';
import { fadeIn, slideIn } from '../../../styles/animations';

export const BannerSlideWrapper = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    height: 500px;
    width: 100%;
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;


    @media ${theme.medias.smallpc} {
      height: 350px;
    }

    @media ${theme.medias.tablet} {
      height: 300px;
    }

    @media ${theme.medias.mobile} {
      height: 250px;
    }


    .swiper-slide {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const BannerSlideContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* @media (max-width: 1425px) {
      max-width: 20000px;
    } */

    @media ${theme.medias.smallpc} {
      height: 350px;
    }

    @media ${theme.medias.tablet} {
      height: 300px;
    }

    @media ${theme.medias.mobile} {
      height: 250px;
    }


    .swiper-slide {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  `}
`;
