import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SlideElement = styled.div`
  ${({ theme }) => css`
  
     width:100%;
     height: 100%;
     padding: 10px;

    & .swiper-slide {
      height: 250px;
    }  

    @media ${theme.medias.smallpc} { /* Target tablet screens */
    .swiper-slide {
      height: 300px;
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
