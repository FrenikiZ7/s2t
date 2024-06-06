import styled, { css } from 'styled-components';

export const ColumnContainer = styled.section`
  ${({ theme, color }) => css`
      background: ${color};
      color: white;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.medium};
  `}
`;
