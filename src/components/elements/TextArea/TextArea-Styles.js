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
      transition: box-shadow 500ms ease-in-out;
      box-shadow: 0px 0px 5px 2px ${theme.colors.quaternary};


      &:hover{
        outline: none;
        box-shadow: 0px 0px 5px 2px ${theme.colors.secondary};
      }

      &::-webkit-input-placeholder {
        color: ${theme.colors.white};
      }

      &:focus {
        outline: none;
      }
  `}
`;
