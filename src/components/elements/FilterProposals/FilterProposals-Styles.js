import styled, { css } from 'styled-components';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles';
import { slideIn } from '../../../styles/animations';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { AuthDropdownContainer, DropdownButton, DropdownItem } from '../AuthElements/AuthDropdown/AuthDropdown-Styles.js';

export const FilterProposalsContainer = styled.div`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms;
    width: 100%;
    border-radius: 12px;


    & ${DropdownButton}, ${DropdownItem} {
      @media ${theme.medias.mobile} {
       font-size: ${theme.sizes.xsmall};
      }
    }

    & ${RowContainer} {
      width: 100%;
      justify-content: space-between;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      @media ${theme.medias.tablet} {
        flex-direction: column;
      }

      & ${AuthDropdownContainer} {
         min-width: 210px;
       }
    }
  `}
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
     width: 100%;
     max-width: 300px;
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     align-items: center;
     gap: ${theme.spacings.xxsmall};
     position: relative;

     @media ${theme.medias.tablet} {
      max-width: none;
     }
  `}
`;

export const FiltersWrapper = styled.div`
  ${({ theme, isopen }) => css`
     background: ${theme.colors.black};
     display: ${isopen};
     animation: ${slideIn} 500ms;
     width: 100%;
  `}
`;
