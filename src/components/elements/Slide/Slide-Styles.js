import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../styles/animations';

export const SlideElement = styled.div`
  ${({ theme }) => css`
    margin-bottom: 50px;
    padding: ${theme.spacings.small};
    animation: ${slideInLeft} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
  `}
`;
