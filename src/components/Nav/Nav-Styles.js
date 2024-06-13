import styled, { css } from 'styled-components';

export const NavContainer = styled.nav`
  ${({ theme }) => css`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 20px;
     height: 100%;
     padding: ${theme.spacings.medium};
  `}
`;
