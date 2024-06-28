import Prop from 'prop-types';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import * as Styled from './BannerSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';

export function BannerSlide({
  children, lazy, title = '', slidesperview = 3, backgroundimagesrc, gradientdirection,
}) {
  return (
    <Styled.BannerSlideWrapper
      backgroundimagesrc={backgroundimagesrc}
      gradientdirection={gradientdirection}
    >
      {title && <Subtitle text="Vídeos em alta" uppercase size="25px" />}

      <Styled.BannerSlideContainer>
        <Swiper
          spaceBetween={10}
          grabCursor
          navigation
          loop
          lazy={lazy ? 'true' : undefined}
          breakpoints={{

            1425: {
              slidesPerView: slidesperview,
            },

            1050: {
              slidesPerView: 2,
            },

            0: {
              slidesPerView: 1,
            },

          }}
        >
          <>
            {children.map((child, index) => (
              <SwiperSlide key={index} lazy={lazy}>
                {child}
              </SwiperSlide>
            ))}
          </>

        </Swiper>
      </Styled.BannerSlideContainer>

    </Styled.BannerSlideWrapper>
  );
}

BannerSlide.propTypes = {
  children: Prop.node.isRequired,
  title: Prop.string,
  lazy: Prop.bool,
  slidesperview: Prop.number,
  backgroundimagesrc: Prop.string,
  gradientdirection: Prop.string,
};
