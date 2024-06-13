import styled, { css } from 'styled-components';
import { zoomIn } from '../../../styles/animations';

export const IconContainer = styled.div`
  ${({ theme }) => css`
      transition: all 500ms ease-in-out ;
      width: 40px;
      display: flex;
      align-items: center;

      @media ${theme.medias.mobile} {
        width: 30px;
      }

    
      & svg {
        animation: ${zoomIn} 500ms;

        width: 100%;
        transition: all 500ms ease-in-out ;
        color: ${theme.colors.white};

        height: 100%;

        &:hover {
          color: ${theme.colors.secondary};
          transform: scale(1.2);
        }
  
      }
  `}
`;
