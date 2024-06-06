import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './Slide-Styles';
import { Title } from '../Title/Title';
import { ImageCard } from '../ImageCard/ImageCard';

export function Slide({
  items, title,
}) {
  // Organiza os itens para que os que estejam bloqueados venham após os que não estejam
  const orderedItems = [...items].sort((itemA, itemB) => (itemA.islocked ? 1 : -1));

  return (
    <Styled.SlideElement>
      <Title text={title} uppercase />
      <Swiper
        spaceBetween={15}
        navigation
        breakpoints={{
          1601: {
            slidesPerView: 7,
          },

          1415: {
            slidesPerView: 6,
          },

          1100: {
            slidesPerView: 5,
          },

          680: {
            slidesPerView: 4,
          },

          480: {
            slidesPerView: 3,
          },

          0: {
            slidesPerView: 2,
          },
        }}
      >

        {orderedItems.length > 0 && orderedItems.map((item) => (
          <SwiperSlide key={item.id}>
            <ImageCard
              src={item.src}
              alt="Benefício"
              title={item.title}
              islocked={item.islocked}
              path={item.islocked ? '/plans' : item.path}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </Styled.SlideElement>
  );
}

Slide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
