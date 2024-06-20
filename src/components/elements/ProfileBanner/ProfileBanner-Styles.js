import styled, { css } from 'styled-components';
import { slideOut } from '../../../styles/animations';

export const ProfileBannerContainer = styled.div`
  ${({ theme, backgroundimagesrc }) => css`
  background: linear-gradient(
   to bottom,
   rgba(0, 0, 0, 0.5),
   rgba(0, 0, 0, 1)
  ),
  url(${backgroundimagesrc || '/assets/images/backgrounds/slider-bg-1.png'});

    background-position: center;
    background-size: cover;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 350px;
    display: flex;
    color: white;
    align-items: center;
    gap: ${theme.spacings.small};
    animation: ${slideOut} 300ms ease-out;


    @media${theme.medias.mobile} {
      flex-direction: column;
      justify-content: center;
      height: 250px;
    }
  `}
`;
