import Prop from 'prop-types';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import * as Styled from './BannerSlide-Styles';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';
import { Subtitle } from '../Subtitle/Subtitle';

export function BannerSlide({ children, title = '', lazy = false }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.BannerSlideWrapper>
      {title && <Subtitle text="Vídeos em alta" uppercase size="25px" />}

      <Styled.BannerSlideContainer>
        <Swiper
          spaceBetween={10}
          grabCursor
          navigation
          loop
          lazy={lazy}
          breakpoints={{

            1425: {
              slidesPerView: 3,
            },

            931: {
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
  lazy: Prop.string,
};
