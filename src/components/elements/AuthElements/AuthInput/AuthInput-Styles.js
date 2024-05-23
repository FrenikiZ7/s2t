import styled, { css } from 'styled-components';

export const AuthInputElement = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.transparent};
    border: ${theme.borders.white};
    border-radius: 7px;
    color: ${theme.colors.white};

    font-size: ${theme.sizes.large};
    font-family: ${theme.fonts.primary};
  

    height: 45px;
    padding: 8px 12px;
    transition: all 300ms ease-in-out;
    

    &:hover {
      border: ${theme.borders.tertiary};
    }

    &::-webkit-input-placeholder {
      color: ${theme.colors.white};
    }

    &:focus {
      border: ${theme.borders.secondary};
      outline: none;
    }

    @media ${theme.medias.medium} {
      font-size: ${theme.sizes.small};
    }
  `}
`;
