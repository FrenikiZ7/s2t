import styled, { css } from 'styled-components';

export const ColumnContainer = styled.div`
  ${({ theme, color }) => css`
      background: ${color};
      color: white;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: ${theme.spacings.small};


  `}
`;
