import styled, { css } from 'styled-components';
import { spin360Left, spin360Right, zoomIn } from '../../../styles/animations';

export const IconContainer = styled.div`
  ${({ theme, hovercolor, active }) => css`
      transition: all 500ms ease-in-out ;
      width: 40px;
      display: flex;
      align-items: center;     
      animation: ${active ? spin360Right : spin360Left} 1000ms;

    

      @media ${theme.medias.mobile} {
        width: 30px;
      }
    
      & svg {

        width: 100%;
        height: 100%;

        transition: all 500ms ease-in-out ;
        color: ${active ? theme.colors.primary : theme.colors.white};

        &:hover {
          color: ${hovercolor || theme.colors.secondary};
          transform: scale(1.1);
        }
  
      }
  `}
`;
