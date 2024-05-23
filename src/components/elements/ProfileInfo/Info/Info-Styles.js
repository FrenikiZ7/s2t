import styled, { css } from 'styled-components';

export const InfoElement = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-family: ${theme.fonts.primary};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    grid-area: 'info';
  `}
`;

export const InfoTitle = styled.h1`
  ${({ theme }) => css`
    font-weight: 800;
    font-size: ${theme.sizes.large};

    &::after {
       content: ':'
    }

    @media ${theme.medias.mobile} {
     font-size: ${theme.sizes.small};
    }
  `}
`;

export const Info = styled.p`
  ${({ theme }) => css`
  font-size: ${theme.sizes.medium};
  @media ${theme.medias.mobile} {
   font-size: ${theme.sizes.small};
  }
  `}
`;
