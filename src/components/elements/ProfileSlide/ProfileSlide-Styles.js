import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../styles/animations';

export const ProfileSlideElement = styled.div`
  ${({ theme }) => css`

    & .swiper-slide {
      height: 270px;
      border-radius: 15px;
    }
    
    @media (max-width: 1265px) { /* Target tablet screens */
    .swiper-slide {
      height: 320px;
     }
    }

    @media ${theme.medias.smallpc} { /* Target tablet screens */
    .swiper-slide {
      height: 250px;
     }
    }

    @media ${theme.medias.tablet} { /* Target tablet screens */
    .swiper-slide {
      height: 320px;
     }
    }

    @media ${theme.medias.mobile} { /* Target tablet screens */
    .swiper-slide {
      height: 190px;
     }
    }
    


    & img, video {
      object-fit: fill;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${theme.borders.xtransparent};


      &:hover {
        border: ${theme.borders.xsecondary};
      }
    }
  `}
`;
