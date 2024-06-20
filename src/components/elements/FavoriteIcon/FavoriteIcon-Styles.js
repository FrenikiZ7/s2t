import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';

export const FavoriteIconElement = styled.div`
  ${({ theme, isfavorite }) => css`
  ${IconContainer} {
    width: 30px;

    @media ${theme.medias.mobile} {
      width: 25px;
    }

    > svg {
     color: ${isfavorite ? theme.colors.red : ''};
     padding: 2px;
    }
  }
  `}
`;
