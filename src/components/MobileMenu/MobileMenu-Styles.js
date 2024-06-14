import styled, { css } from 'styled-components';
import { LinkContainer } from '../elements/StyledLink/StyledLink-Styles';
import { GridLayoutContainer } from '../GridLayout/GridLayout-Styles';
import { slideIn } from '../../styles/animations';

export const MobileMenuElement = styled.nav`
  ${({ theme }) => css`
    animation: ${slideIn} 300ms;
    background: rgba(0, 0, 0, 0.8);
    border: ${theme.borders.white};
    box-shadow: 0px 0px 10px 2px ${theme.colors.white};
    border-radius: 15px;

    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: ${theme.spacings.xxsmall};
    z-index: 101;
    

    display: none;
    width: 180px;
    height: 260px;

    transition: all 500ms ease-in-out;

    @media ${theme.medias.tablet} {
      display: block
    }

    @media ${theme.medias.smallmobile} {
      width: 160px;
    }


    ${GridLayoutContainer}{
     gap: 2px;
     grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    }

    ${LinkContainer}{
      font-size: ${theme.sizes.xsmall};

      & svg {
      color: ${theme.colors.white};
      width: 20px;
      transition: all 300ms ease-in-out;
      }

      &:hover {
        color: ${theme.colors.primary};
        & svg {
          color: ${theme.colors.primary};
        }
      }
    }

  `}
`;
