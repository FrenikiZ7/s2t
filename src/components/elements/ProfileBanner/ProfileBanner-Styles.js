import styled, { css } from 'styled-components';
import { slideOut, spin360Left, spin360Right } from '../../../styles/animations';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { IconContainer } from '../IconDiv/IconDiv-Styles.js';

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

     > ${RowContainer} {

        align-items: center;
        width: auto;
        gap: ${theme.spacings.xsmall};

        @media ${theme.medias.smallpc} {
          flex-direction: row;
        }

        @media ${theme.medias.tablet} {
          justify-content: center;
        }

        > ${IconContainer} {
          width: 35px;

          @media ${theme.medias.tablet} {
            width: 30px;
          }

          @media ${theme.medias.smallmobile} {
            width: 23px;
          }
         }      
       }
 `}
`;
