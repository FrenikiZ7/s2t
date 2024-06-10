import styled, { css } from 'styled-components';
import { GridTwoColumnContainer } from '../../GridTwoColumn/GridTwoColumn-Styles';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { slideIn } from '../../../styles/animations';
import { RowContainer } from '../../RowContainer/Row-Styles.js';

export const ProposalModalElement = styled.div`
  ${({ theme }) => css`
     animation: ${slideIn} 500ms;

     border-radius: 15px;
     overflow-y: auto;
     border: ${theme.borders.xwhite};
     background: rgba(0, 0, 0, 0.8);

     display: flex;
     flex-direction: column;
     gap: ${theme.spacings.xlarge};

     position: absolute;
     z-index: 100; 

     width: 70%;
     padding: ${theme.spacings.xxlarge};


     transition: all 700ms ease-in-out;
     

     @media ${theme.medias.smallpc} {
      width: 100%;
      max-height: 700px;
      padding: ${theme.spacings.medium};
     }

     @media ${theme.medias.tablet} {
      max-height: 500px;
     }

     &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
     }

     }


     ${GridTwoColumnContainer} {
      width: 100%;
      height: auto;
      justify-content: space-between;
      grid-gap: 5px 100px;
     }

     ${SubtitleElement} {
       margin-bottom: 0px;
     }

     ${RowContainer} {
      justify-content: space-between;
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      > h1 {
        margin: auto 0;
      }

     }
  `}
`;

export const CloseDiv = styled.div`
  ${({ theme }) => css`
      /* position: absolute;
      top: 0px;
      right: 10px; */
      transition: all 500ms ease-in-out ;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: ${theme.colors.secondary};
        transform: scale(1.2);
      }
    
      & svg {
      width: 40px;
      height: 100%;
    
      top: 0;
      right: 0;
      margin-bottom: 3px;

      @media ${theme.medias.mobile} {
        width: 30px;
      }
      }
  `}
`;
