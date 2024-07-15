import styled, { css } from 'styled-components';
import { spin360Left, spin360Right, zoomIn } from '../../../styles/animations';

export const IconCardContainer = styled.div`
  ${({
    theme, hovercolor, active, activecolor, color,
  }) => css`
    background: ${theme.colors.darkgray};
    animation: ${active ? spin360Right : spin360Left} 1000ms;

    width: 100%;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};
    justify-content: center;

    padding: ${theme.spacings.xlarge};
    border: ${theme.borders.xwhite};

    transition: all 500ms ease-in-out ;

     &:hover {
       box-shadow: 0px 0px 10px 4px ${theme.colors.gray};
       transform: scale(1.05);

        > svg {
          transform: scale(1.05);
        }
      }

      > svg {
        width: 50%;
        height: 50%;
        transition: all 500ms ease-in-out ;
        color: ${active ? activecolor : color};
      }
  `}
`;
