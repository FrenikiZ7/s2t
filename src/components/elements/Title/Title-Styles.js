import styled, { css } from 'styled-components';

export const TitleElement = styled.h1`
  ${({ theme, color, size }) => css`
     color: ${color};
     font-size: ${size};
     font-family: ${theme.fonts.primary};
     font-weight: 600;
  `}
`;
