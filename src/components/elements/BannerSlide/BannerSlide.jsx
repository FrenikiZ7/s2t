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
import { VerticalMiniSlide } from '../VerticalMiniSlide/VerticalMiniSlide';

export function BannerSlide({ items }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.BannerSlideWrapper>
      <Styled.BannerSlideContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          grabCursor
          // navigation
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
          {/* <SwiperSlide>
          <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />
          <VerticalMiniSlide title="Notícias" type="news" items={s2tState.news} />
          <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />
        </SwiperSlide> */}

          <SwiperSlide>
            <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />
          </SwiperSlide>

          <SwiperSlide>
            <VerticalMiniSlide title="Notícias" type="news" items={s2tState.news} />
          </SwiperSlide>

          <SwiperSlide>
            <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />
          </SwiperSlide>

        </Swiper>
      </Styled.BannerSlideContainer>

    </Styled.BannerSlideWrapper>
  );
}

BannerSlide.propTypes = {
  items: Prop.arrayOf(Prop.object),
};
