import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './Slide-Styles';

export function Slide({ items }) {
  return (
    <Styled.SlideElement>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation
        breakpoints={{

          // Breakpoint for PCs smalls screen
          1500: {
            slidesPerView: 3,
          },
          // Breakpoint for tablet screens
          900: {
            slidesPerView: 2,
          },
          // Breakpoint for mobile screens
          0: {
            slidesPerView: 1,
          },
        }}
      >

        {items.length > 0 && items.map((item) => (
          <SwiperSlide key={item.id}>

            {item.type === 'photo' ? <img src={item.src} alt="" /> : (
              <video autoPlay muted>
                <source src={item.src} type="video/mp4" />
                <track kind="captions" src="" srcLang="en" />
              </video>
            )}

          </SwiperSlide>
        ))}

      </Swiper>
    </Styled.SlideElement>
  );
}

Slide.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired, // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
