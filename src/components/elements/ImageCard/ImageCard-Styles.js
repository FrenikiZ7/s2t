import styled, { css } from 'styled-components';

export const ImageCardElement = styled.div`
  ${({ theme, islocked }) => css`
  border-radius: 15px;
  border: ${theme.borders.xtransparent};
  background: ${islocked ? 'black' : 'none'};

  width: 100%;
  height: 100%;

  position: relative;

  transition: all 500ms ease-in-out;

  &:hover {
    border: ${theme.borders.xsecondary};

    > h2 {
      color: ${theme.colors.tertiary};
      background-color: ${theme.colors.mediumblack};
    }
  }
  `}
`;

export const Image = styled.img`
  ${({ theme, islocked }) => css`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    transition: all 500ms ease-in-out;
    filter: ${islocked ? 'grayscale(1) opacity(0.6)' : 'grayscale(0) opacity(1)'}
  `}
`;

export const LockDiv = styled.div`
  ${({ theme }) => css`

    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    transition: all 500ms ease-in-out;


    >img {
      width: 35%;
      height: 35%;
      
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightblack};
    border-radius: 0px 0px 15px 15px;
    font-size: ${theme.sizes.large};
    font-family: ${theme.fonts.primary};
    text-transform: uppercase;
    text-align: center;

    width: 100%;
    padding: ${theme.spacings.xxsmall};
    
    position: absolute;
    bottom: 0px;

    transition: all 500ms ease-in-out;

    @media ${theme.medias.smallpc} {
      font-size: ${theme.sizes.medium};
    }

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.xsmall};
    }


  `}
`;
