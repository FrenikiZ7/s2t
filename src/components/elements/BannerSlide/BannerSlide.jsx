import Prop from 'prop-types';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import * as Styled from './BannerSlide-Styles';
import { Row } from '../../RowContainer/Row';
import { SocialLink } from '../SocialLink/SocialLink';
import { SoloSlide } from '../SoloSlide/SoloSlide';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function BannerSlide({ items }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.BannerSlideElement>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        grabCursor
        navigation
        pagination
        loop
      >
        <SwiperSlide>
          <Styled.BannerContainer>
            <img src="assets/images/backgrounds/slider-bg-1.png" alt="" />
          </Styled.BannerContainer>

        </SwiperSlide>

        <SwiperSlide>
          <Styled.BannerContainer>
            <img src="assets/images/backgrounds/slider-bg-2.png" alt="" />
          </Styled.BannerContainer>
        </SwiperSlide>

        <SwiperSlide>
          <Styled.BannerContainer>
            <img src="assets/images/backgrounds/slider-bg-1.png" alt="" />
          </Styled.BannerContainer>

        </SwiperSlide>

        <SwiperSlide>
          <Styled.BannerContainer>
            <img src="assets/images/backgrounds/slider-bg-2.png" alt="" />
          </Styled.BannerContainer>
        </SwiperSlide>
      </Swiper>
    </Styled.BannerSlideElement>
  );
}

BannerSlide.propTypes = {
  items: Prop.arrayOf(Prop.object),
};
