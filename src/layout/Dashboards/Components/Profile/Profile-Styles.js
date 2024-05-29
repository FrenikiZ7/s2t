import styled, { css } from 'styled-components';
import { slideIn } from '../../../../styles/animations';

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
  `}
`;
