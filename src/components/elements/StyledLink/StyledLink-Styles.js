import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  ${({ theme, color, hovercolor }) => css`
    color: ${color};
    font-family: ${theme.fonts.primary};
    text-decoration: none;
    text-align: center;
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 400ms ease-in-out;

    &:hover {
      color: ${hovercolor};
    }
  `}
`;
