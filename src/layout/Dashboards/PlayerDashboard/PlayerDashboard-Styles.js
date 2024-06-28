import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { IconContainer } from '../../../components/elements/IconDiv/IconDiv-Styles';
import { spin360Left, spin360Right } from '../../../styles/animations';
import { RowContainer } from '../../../components/RowContainer/Row-Styles.js';

export const PlayerDashboardContainer = styled.section`
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
