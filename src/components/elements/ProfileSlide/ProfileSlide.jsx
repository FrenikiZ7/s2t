import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './ProfileSlide-Styles';
import { Title } from '../Title/Title';

export function ProfileSlide({ items, title }) {
  return (
    <Styled.ProfileSlideElement>
      <Title text={title} uppercase />
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation
        breakpoints={{

          // Breakpoint for PCs smalls screen
          1200: {
            slidesPerView: 3,
          },
          // Breakpoint for tablet screens
          768: {
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

            {item.type === 'photo' ? <img src={item.src} alt={item.alt} /> : (
              <video autoPlay muted>
                <source src={item.src} type="video/mp4" />
                <track kind="captions" src="" srcLang="en" />
              </video>
            )}

          </SwiperSlide>
        ))}

      </Swiper>
    </Styled.ProfileSlideElement>
  );
}

ProfileSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
