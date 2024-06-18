import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';

export const AuthIconFileContainer = styled.label`
  ${({ theme }) => css`

    &:hover {
      > svg {
        color: ${theme.colors.secondary};
        transform: scale(1.1);
    }
    }

    ${IconContainer} {
    position: absolute;  
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > svg {
      width: 30%;
    }
  }
  `}
`;

export const AuthIconFileInput = styled.input`
  ${({ theme }) => css`
    display: none;
  `}
`;
