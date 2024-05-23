import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #000000;
    }


//CSS Global para os Slides usados via Swiper
.swiper-button-next, 
.swiper-button-prev {
  color: ${({ theme }) => theme.colors.white}
  
}

.swiper-button-next:after, 
.swiper-button-prev:after {
  font-size: ${({ theme }) => theme.sizes.xxlarge};
}

.swiper-button-next.swiper-button-disabled, 
.swiper-button-prev.swiper-button-disabled {
    opacity: 0;
}

.swiper-pagination-bullet-active {
  background-color: ${({ theme }) => theme.colors.white} !important;
}

.swiper-pagination-bullet {
  background-color: ${({ theme }) => theme.colors.white};
}

`;

export default GlobalStyles;
