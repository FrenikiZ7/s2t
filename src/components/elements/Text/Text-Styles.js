import styled, { css } from 'styled-components';

export const TextElement = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.white};

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }


  `}
`;
