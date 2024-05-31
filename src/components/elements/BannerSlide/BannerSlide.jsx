import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './BannerSlide-Styles';

export function BannerSlide({ items }) {
  return (
    <Styled.BannerSlideElement>
      <Swiper
        slidesPerView={1}
        navigation
        pagination
      >
        <SwiperSlide>
          <img src="assets/images/field-background.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="assets/images/field-background.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="assets/images/field-background.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="assets/images/field-background.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Styled.BannerSlideElement>
  );
}

BannerSlide.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
};
