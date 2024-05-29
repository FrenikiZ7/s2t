import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { TitleElement } from '../Title/Title-Styles';

export const TextSlideElement = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    > ${TitleElement}{
    }

    & .swiper-slide {
      margin-bottom: ${theme.spacings.large};

      @media ${theme.medias.smallpc} {
        margin-bottom: ${theme.spacings.xxlarge};
      }
    }

  `}
`;
