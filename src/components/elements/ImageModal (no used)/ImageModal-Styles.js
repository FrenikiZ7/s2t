import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';

export const ModalWrapper = styled.div`
  ${({ theme }) => css`

    .swiper-wrapper {
      height: 100%;
      width: 100%;
    }

    .swiper-slide {
      height: 100%;
      width: 100%;
    }
    
  `}
`;

export const ImageModalContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
   
    border: ${theme.borders.xwhite};
    border-radius: 15px;
    transition: all 400ms ease-in-out; /* Adicione uma transição suave */

    ${IconContainer} {
      position: absolute;
      top: 3px;
      right: 7px;
    }
  `}
`;

export const ImageModal = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border: ${theme.borders.xwhite};
    border-radius: 15px;
  `}
`;
