import styled, { css } from 'styled-components';

export const PlayerNav = styled.nav`
  ${({ theme }) => css`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${theme.spacings.large};
     height: 100%;
     width: 100%;
     padding: ${theme.spacings.medium};
  `}
`;
