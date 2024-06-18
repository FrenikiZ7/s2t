import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../components/ColumnContainer/Column-Styles';
import { AuthHistoricContainer } from '../../components/elements/AuthElements/AuthHistoric/AuthHistoric-Styles';
import { RowContainer } from '../../components/RowContainer/Row-Styles.js';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles.js';

export const RegisterPage = styled.section`
  ${({ theme }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center; 
     gap: ${theme.spacings.medium};


     ${RowContainer} {
      justify-content: center;
      
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
     }

     ${AuthContainer} {
      max-width: 600px;
      height: auto;
     }

    }
  `}
`;
