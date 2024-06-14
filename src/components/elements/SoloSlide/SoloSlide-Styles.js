import styled, { css } from 'styled-components';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const SoloSlideElement = styled.div`
  ${({ theme, size }) => css`
  width: 100%;
  height: 100%;

   ${LinkContainer} {
    width: 100%;
    height: 100%;
   }

    & img, video {
      object-fit: fill;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      box-sizing: border-box;
    
    }

    .swiper-wrapper {
      width: 100%;
      height: ${size};

      @media ${theme.medias.smallpc} {
          max-height: 500px;
        }

        @media ${theme.medias.tablet} {
          max-height: 370px;
        }

        @media ${theme.medias.mobile} {
          max-height: 300px;
        }
    }

    & .swiper-slide {
      width: 100%;
      height: 100%;
    }
  `}
`;
