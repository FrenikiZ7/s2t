import styled, { css } from 'styled-components';

export const ProfileInfoElement = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-family: ${theme.fonts.primary};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    grid-area: 'element';
  
  `}
`;

export const InfoTitle = styled.h1`
  ${({ theme }) => css`
    font-weight: 800;
    font-size: ${theme.sizes.medium};

    &::after {
       content: ':'
    }

    @media ${theme.medias.mobile} {
     font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.smallmobile} {
     font-size: ${theme.sizes.xsmall};
    }
  `}
`;

export const Info = styled.p`
  ${({ theme }) => css`
  font-size: ${theme.sizes.medium};
  
  @media ${theme.medias.mobile} {
   font-size: ${theme.sizes.small};
  }

  @media ${theme.medias.smallmobile} {
     font-size: ${theme.sizes.xsmall};
  }
  `}
`;
