import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './SoloSlide-Styles';
import 'swiper/css/bundle';
import { StyledLink } from '../StyledLink/StyledLink';

export function SoloSlide({ items, size = '500px' }) {
  console.log(items);
  return (
    <Styled.SoloSlideElement size={size}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <StyledLink path={item.path}>
              <img src={item.src} alt={item.title} />
            </StyledLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.SoloSlideElement>
  );
}

SoloSlide.propTypes = {
  size: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
};
