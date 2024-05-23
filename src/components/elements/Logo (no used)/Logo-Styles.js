import styled, { css } from 'styled-components';

export const LogoElement = styled.h1`
  ${({ theme }) => css`
    > img {
      background: red;
      height: 200px;
    }
  `}
`;
