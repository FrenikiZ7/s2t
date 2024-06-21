import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './Events-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { EventCard } from '../EventCard/EventCard';

export function Events({ children }) {
  return (
    <Styled.EventsWrapper>
      <Subtitle text="Eventos" uppercase as="h3" />

      <Styled.EventsContainer>

        <Swiper
          spaceBetween={1}
          direction="vertical"
          grabCursor
          slidesPerView={3}
          mousewheel
          pagination
        >
          <SwiperSlide>
            <EventCard title="26/06/2024" subtitle="16:30" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard title="30/06/2024" subtitle="18:20" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </SwiperSlide>

          <SwiperSlide>
            <EventCard title="05/07/2024" subtitle="20:00" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </SwiperSlide>

          <SwiperSlide>
            <EventCard title="10/07/2024" subtitle="22:30" text="Lorem ipsum dolor sit amet, consectetur adipiscing elitvo" />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard title="12/07/2024" subtitle="10:00" text="Lorem ipsum dolor sit amet, consectetur adipiscing elitisa" />
          </SwiperSlide>

          <SwiperSlide>
            <EventCard title="18/07/2024" subtitle="09:30" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          </SwiperSlide>

        </Swiper>

      </Styled.EventsContainer>
    </Styled.EventsWrapper>

  );
}

Events.propTypes = {
  children: Prop.node.isRequired,

};
