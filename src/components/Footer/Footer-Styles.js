import styled, { css } from 'styled-components';
import { slideOut } from '../../styles/animations';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background: linear-gradient(to bottom, ${theme.colors.black}, ${theme.colors.darkgray});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
    animation: ${slideOut} 300ms ease-out;
  `}
`;
