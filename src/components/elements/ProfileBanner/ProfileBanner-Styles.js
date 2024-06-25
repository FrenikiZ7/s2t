import styled, { css } from 'styled-components';
import { slideOut } from '../../../styles/animations';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';

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


    @media${theme.medias.tablet} {
      flex-direction: column;
      justify-content: center;
      gap: ${theme.spacings.xsmall};
    }

    @media${theme.medias.mobile} {
      height: 300px;
    }
    

    & ${ColumnContainer} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.medium};
    }
  `}
`;
