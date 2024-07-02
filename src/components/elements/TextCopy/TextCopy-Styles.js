import styled, { css } from 'styled-components';
import { TextElement } from '../Text/Text-Styles';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { fadeIn } from '../../../styles/animations';

export const TextCopyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    
    width: 100%;
    height: 100%;

    ${RowContainer} {
      align-items: center;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      @media ${theme.medias.mobile} {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    ${TextElement} {
      animation: ${fadeIn} 300ms;
    }

    ${IconContainer} {
      animation: none;
    }
  `}
`;

export const TextCopyElement = styled.div`
  ${({ theme }) => css`
    background: black;
    border-radius: 12px;
    color: black;
    border: ${theme.borders.white};
    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xxlarge};

    @media ${theme.medias.mobile} {
     width: 100%;
    }

    @media ${theme.medias.smallmobile} {
     gap: ${theme.spacings.small};
    }

    ${IconContainer} {
      width: 25px;

      @media ${theme.medias.mobile} {
        width: 20px;
      }

      @media ${theme.medias.smallmobile} {
        width: 15px;
      }
    }
  `}
`;
