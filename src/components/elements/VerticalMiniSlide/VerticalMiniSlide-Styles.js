import styled, { css } from 'styled-components';

export const VerticalMiniSlideWrapper = styled.div`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

  `}
`;

export const VerticalMiniSlideContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 500px;
  
    .swiper-wrapper{
      height: 300px;




      @media ${theme.medias.smallpc} {
        height: 150px;

      }

      @media ${theme.medias.mobile} {
        height: 170px;
      }
    }

    .swiper-slide {
      padding: ${theme.spacings.xsmall};

    }
  `}
`;
