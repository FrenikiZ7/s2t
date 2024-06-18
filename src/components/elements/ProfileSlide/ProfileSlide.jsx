import Prop, { bool } from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Report as ReportIcon } from '@styled-icons/material-outlined/Report';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import * as Styled from './ProfileSlide-Styles';
import { Title } from '../Title/Title';
import { IconDiv } from '../IconDiv/IconDiv';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';

export function ProfileSlide({
  items, title, report = false, addmore = false,
}) {
  return (
    <Styled.ProfileSlideElement>
      <Title text={title} uppercase />
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation
        grabCursor
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
          <SwiperSlide
            key={item.id}
            zoom
          >

            {item.type === 'photo' && (
              <Styled.MediaWrapper>
                {report && <ReportIcon />}
                <img src={item.src} alt={item.alt} />
              </Styled.MediaWrapper>
            )}

            {item.type === 'video' && (
            <Styled.MediaWrapper>
              {report && <ReportIcon />}
              <video autoPlay muted>
                <source src={item.src} type="video/mp4" />
                <track kind="captions" src="" srcLang="en" />
              </video>
            </Styled.MediaWrapper>
            )}

          </SwiperSlide>
        ))}

        {addmore && (
        <SwiperSlide>
          <Styled.MediaWrapper>

            {/* <IconDiv name="Adicionar mais">
              <AddIcon />
            </IconDiv> */}

            <AuthIconFile id="addMoreMedia" accept="image/*,video/*" />

            <img src="/assets/images/backgrounds/ball.png" alt="" />
          </Styled.MediaWrapper>
        </SwiperSlide>
        )}

      </Swiper>
    </Styled.ProfileSlideElement>
  );
}

ProfileSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
  report: Prop.bool,
  addmore: Prop.bool,

};
