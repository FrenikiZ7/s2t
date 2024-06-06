import styled, { css } from 'styled-components';

export const AuthHistoricContainer = styled.div`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    @media ${theme.medias.tablet} {
      width: 100%;
    }

    > h4 {
      color: white;
      font-weight: 400;
    }
  `}
`;
