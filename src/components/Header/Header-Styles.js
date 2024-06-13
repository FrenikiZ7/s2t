import styled, { css } from 'styled-components';
import { slideOut } from '../../styles/animations';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.large};
    animation: ${slideOut} 300ms ease-out;
  `}
`;
