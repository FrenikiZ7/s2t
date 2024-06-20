import styled, { css } from 'styled-components';
import { zoomIn } from '../../../styles/animations';

export const IconContainer = styled.div`
  ${({ theme, hovercolor }) => css`
      transition: all 500ms ease-in-out ;
      width: 40px;
      display: flex;
      align-items: center;

      @media ${theme.medias.mobile} {
        width: 30px;
      }

    
      & svg {

        width: 100%;
        height: 100%;

        transition: all 500ms ease-in-out ;
        color: ${theme.colors.white};

        &:hover {
          color: ${hovercolor || theme.colors.secondary};
          transform: scale(1.1);
        }
  
      }
  `}
`;
