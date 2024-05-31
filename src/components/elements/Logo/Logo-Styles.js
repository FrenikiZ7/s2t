import styled, { css } from 'styled-components';

export const LogoElement = styled.div`
  ${({ theme, size }) => css`
    > img {
      width: ${size};
    }
  `}
`;
