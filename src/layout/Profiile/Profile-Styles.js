import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../components/ColumnContainer/Column-Styles';

export const ProfileContainer = styled.section`
  ${({ theme }) => css`
    ${ColumnContainer} {
      width: 70%;
      height: 1000px;
      margin: 0 auto;

      @media ${theme.medias.tablet} {
        width: 100%;
      }
    }
  `}
`;
