import styled, { css } from 'styled-components';

export const TextAreaElement = styled.textarea`
  ${({ theme }) => css`
      max-width: 100%;
      min-width: 100%;
      min-height: 100px;
      max-height: 100px;
      color: ${theme.colors.white};
      border: ${theme.borders.white};
      border-radius: 7px;
      font-size: 14px;
      padding: 8px 12px;
      background: transparent;
      font-family: ${theme.fonts.primary};
      font-size: ${theme.sizes.medium};
      transition: box-shadow 500ms ease-in-out;
      box-shadow: 0px 0px 5px 2px ${theme.colors.quaternary};

      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.xsmall};
      }

      &:hover{
        outline: none;
        box-shadow: 0px 0px 5px 2px ${theme.colors.secondary};
      }

      &::-webkit-input-placeholder {
        color: ${theme.colors.white};
        font-size: ${theme.sizes.medium};


        @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.xsmall};
      }
      }

      &:focus {
        outline: none;
      }
  `}
`;
