import styled, { css } from 'styled-components';
import { GridLayoutContainer } from '../../../../components/GridLayout/GridLayout-Styles';

export const OpportunitiesContainer = styled.div`
  ${({ theme }) => css`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: ${theme.spacings.medium};

   width: 100%;
   height: 100%;
   min-height: 400px;
  `}
`;
