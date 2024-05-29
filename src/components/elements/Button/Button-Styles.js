import styled, { css } from 'styled-components';

export const ButtonLinkElement = styled.button`
  ${({
    theme, textcolor, texthover, bgcolor, bghover, border, borderhover,
  }) => css`
    color: ${textcolor};
    background: ${bgcolor};
    padding: ${theme.spacings.xsmall};
    font-family: ${theme.fonts.primary};
    font-weight: 800;
    font-size: ${theme.sizes.small};
    border: 1px solid ${border};
    border-radius: 10px;
    text-transform:uppercase;

    transition: all 500ms ease-in-out;

    &:hover{
      color: ${texthover};
      background: ${bghover};
      border: 1px solid ${borderhover};
    }

    @media${theme.medias.tablet} {
      font-size: ${theme.sizes.xsmall};
    }

    @media${theme.medias.smallmobile} {
      font-size: ${theme.sizes.xxsmall};
    }
  `}
`;
