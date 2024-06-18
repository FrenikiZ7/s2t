import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../styles/animations';
import { IconContainer } from '../IconDiv/IconDiv-Styles';

export const ProfileSlideElement = styled.div`
  ${({ theme }) => css`



    & .swiper-slide {
      height: 270px;
      border-radius: 15px;
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
    
  `}
`;

export const MediaWrapper = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 100%;

  &:hover {
    > img, video {
      border: ${theme.borders.xsecondary};
    }

    & ${IconContainer} {

      > svg {
        color: ${theme.colors.secondary};
        transform: scale(1.1);
      }
      
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
  }


  > svg {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);

    color: ${theme.colors.white};
    width: 40px;
    position: absolute;
    right: 10px;
    top: 5px;
    z-index: 20;
    transition: all 500ms ease-in-out;

    &:hover {
      color: ${theme.colors.mediumred};
      transform: scale(1.1);
      background: none;

    }

    @media ${theme.medias.mobile} {
      width: 30px;
    }
  }

  ${IconContainer} {
    position: absolute;  
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > svg {
      width: 30%;
    }

  }
  `}
`;
