import styled, { css } from 'styled-components';
import { slideIn } from '../../../styles/animations';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { TextElement } from '../Text/Text-Styles.js';
import { ButtonElement } from '../Button/Button-Styles.js';

export const ReportModalElement = styled.div`
  ${({ theme }) => css`
     animation: ${slideIn} 500ms;

     border-radius: 15px;
     border: ${theme.borders.xwhite};
     background: rgba(0, 0, 0, 0.8);
     backdrop-filter: blur(10px);
    

     display: flex;
     flex-direction: column;
     gap: ${theme.spacings.xlarge};

     position: absolute;
     top: 17%;
     left: 25%;
     z-index: 100; 

     width: 50%;
     padding: ${theme.spacings.xxlarge};


     transition: all 700ms ease-in-out;     

     @media ${theme.medias.smallpc} {
      padding: ${theme.spacings.medium};
      top: 22%;
     }

     @media ${theme.medias.tablet} {
       width: 100%;
       left: 0;
     }

     @media ${theme.medias.smallmobile} {
     }

     &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
     }

     ${TextElement}, ${ButtonElement} {
      animation: ${slideIn} 1000ms;
     }

     > ${RowContainer} {
      justify-content: space-between;
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      > ${SubtitleElement} {
        margin: auto 0;
      }
     }
     
  `}
`;
