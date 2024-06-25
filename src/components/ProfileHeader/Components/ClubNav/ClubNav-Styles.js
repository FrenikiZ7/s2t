import styled, { css } from 'styled-components';

export const ClubNav = styled.nav`
  ${({ theme }) => css`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${theme.spacings.large};
     height: 100%;
     width: 100%;
     padding: ${theme.spacings.xsmall};
  `}
`;
