import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { fadeIn, slideIn } from '../../../styles/animations';

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
   background: rgba(0,0,0,0.7);
   /* animation: ${fadeIn} 500ms; */

   width: 100%;
   height: 100%;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 1000;

   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 100%;

   @media ${theme.medias.tablet} {
    display: none;
   }
  `}
`;

export const ImageModalContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 15px;
    
    width: 100%;
    position: relative;
    transition: all 500ms ease-in-out; 

    ${IconContainer} {
      z-index: 10;
      position: absolute;
      top: 5px;
      right: 10px;
      animation: none;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`

    & figure.loaded {
      border: ${theme.borders.xwhite};
      box-shadow: 0px 0px 10px 1px ${theme.colors.white};
      border-radius: 15px; 
      user-select: none;
    }

  `}
`;
