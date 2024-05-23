import styled, { css } from 'styled-components';

export const AuthButtonElement = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border: ${theme.borders.white};
    border-radius: 7px;
    color: ${theme.colors.white};

    font-size: ${theme.sizes.medium};
    font-family: ${theme.fonts.primary};
    font-weight: 600;

    height: 45px;
    padding: 8px 12px;

    transition: all 400ms ease-in-out;

    &:hover {
      background: ${theme.colors.quaternary};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;
