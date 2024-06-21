import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './VerticalMiniSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { EventCard } from '../EventCard/EventCard';
import { NewsCard } from '../NewsCard/NewsCard';

export function VerticalMiniSlide({ items, title, type }) {
  return (
    <Styled.VerticalMiniSlideWrapper>
      <Subtitle text={title} uppercase as="h3" />

      <Styled.VerticalMiniSlideContainer>

        <Swiper
          spaceBetween={0}
          direction="vertical"
          slidesPerView={type === 'news' ? 2 : 3}
          mousewheel
          pagination={{ clickable: true }}
          breakpoints={{
            932: {
              slidesPerView: type === 'news' ? 2 : 3,
            },

            0: {
              slidesPerView: 1,
            },
          }}
        >

          {type === 'events' && (
            <>
              {items.map((item) => (
                <SwiperSlide>
                  <EventCard
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                    path={item.path}
                  />
                </SwiperSlide>
              ))}
            </>
          )}

          {type === 'news' && (
          <>
            {items.map((item) => (
              <SwiperSlide>
                <NewsCard
                  title={item.title}
                  thumbnail={item.thumbnail}
                  text={item.text}
                  path={item.path}
                />
              </SwiperSlide>
            ))}
          </>
          )}

        </Swiper>

      </Styled.VerticalMiniSlideContainer>
    </Styled.VerticalMiniSlideWrapper>

  );
}

VerticalMiniSlide.propTypes = {
  title: Prop.string,
  type: Prop.string.isRequired,
  items: Prop.arrayOf(Prop.object).isRequired,
};
