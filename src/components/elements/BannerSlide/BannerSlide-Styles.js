import styled, { css } from 'styled-components';
import { fadeIn, slideIn } from '../../../styles/animations';

export const BannerSlideElement = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    position: relative;
    width: 100%;

      .swiper-wrapper {
        height: 500px;
        width: 100%;

        @media ${theme.medias.smallpc} {
          height: 350px;
        }

        @media ${theme.medias.tablet} {
          height: 300px;
        }

        @media ${theme.medias.mobile} {
          height: 250px;
        }
      }

  `}
`;

export const BannerContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    &::before {
        content: ""; /* Crie um pseudo-elemento para o gradiente */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1)
        );
        pointer-events: none; /* Evita que o gradiente interfira com a interação do usuário */
    }

    & img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      
  `}
`;
