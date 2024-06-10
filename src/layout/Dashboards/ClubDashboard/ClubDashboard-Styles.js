import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { slideIn, slideOut } from '../../../styles/animations';

export const ClubDashboardContainer = styled.section`
  ${({ theme }) => css`
      
    >${ColumnContainer} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${theme.spacings.xlarge};
      padding: ${theme.spacings.medium};


      @media ${theme.medias.tablet} {
        width: 100%;
      }
    }

  `}
`;

export const BannerContainer = styled.section`
  ${({ theme, backgroundimagesrc }) => css`
  background: linear-gradient(
   to bottom,
   rgba(0, 0, 0, 0.5),
   rgba(0, 0, 0, 1)
  ),
  url(${backgroundimagesrc});

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
