import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles';
import { RowContainer } from '../../../components/RowContainer/Row-Styles.js';

export const PublicDashboardContainer = styled.section`
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

    ${RowContainer} {
      width: auto;
      align-items: center;
      gap: ${theme.spacings.xxsmall};

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
    }

    

  `}
`;
