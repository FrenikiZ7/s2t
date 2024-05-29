import styled, { css } from 'styled-components';

export const RowContainer = styled.div`
  ${({ theme, color }) => css`
      width: 100%;
      display: flex;
      color: white;
      gap: ${theme.spacings.small};

      @media ${theme.medias.smallpc} {
        flex-direction: column;
        gap: ${theme.spacings.small};
      }
  `}
`;
