import Prop, { bool } from 'prop-types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Report as ReportIcon } from '@styled-icons/material-outlined/Report';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import * as Styled from './ProfileSlide-Styles';
import { Title } from '../Title/Title';
import { IconDiv } from '../IconDiv/IconDiv';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';
import { RateIcons } from '../RateIcons/RateIcons';
import { ReportModal } from '../ReportModal/ReportModal';

export function ProfileSlide({
  items, title, publicview = false, ownerview,
}) {
  const [isReporing, setIsReporing] = useState(false);

  return (
    <Styled.ProfileSlideWrapper>
      <Styled.ProfileSlideElement>
        <Title text={title} uppercase />
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation
          zoom
          lazy
          breakpoints={{
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
              lazy={item.type === 'video'}
            >

              {item.type === 'photo' && (
              <Styled.MediaWrapper>

                {publicview && (
                  <>
                    <Styled.TopIconsWrapper>
                      <IconDiv name="Denunciar" hovercolor={theme.colors.mediumred} onclick={() => setIsReporing(!isReporing)}>
                        <ReportIcon />
                      </IconDiv>

                      <FavoriteIcon isfavorite={item.isfavorite} />
                    </Styled.TopIconsWrapper>

                    <Styled.BottomIconsWrapper>
                      <RateIcons />
                    </Styled.BottomIconsWrapper>
                  </>
                )}
                <div className="swiper-zoom-container">
                  <img src={item.src} alt={item.alt} />
                </div>

              </Styled.MediaWrapper>
              )}

              {item.type === 'video' && (
              <Styled.MediaWrapper>

                {publicview && (
                <>
                  <Styled.TopIconsWrapper>
                    <IconDiv name="Denunciar" hovercolor={theme.colors.mediumred}>
                      <ReportIcon />
                    </IconDiv>

                    <FavoriteIcon isfavorite={item.isfavorite} />
                  </Styled.TopIconsWrapper>

                  <Styled.BottomIconsWrapper>
                    <RateIcons />
                  </Styled.BottomIconsWrapper>
                </>
                )}

                <video autoPlay muted>
                  <source src={item.src} type="video/mp4" />
                  <track kind="captions" src="" srcLang="en" />
                </video>

              </Styled.MediaWrapper>
              )}

            </SwiperSlide>
          ))}

          {ownerview && (
          <SwiperSlide>
            <Styled.MediaWrapper>

              <AuthIconFile id="addMoreMedia" accept="image/*,video/*" />

              <img src="/assets/images/backgrounds/ball.png" alt="" />
            </Styled.MediaWrapper>
          </SwiperSlide>
          )}

        </Swiper>

      </Styled.ProfileSlideElement>

      {isReporing && <ReportModal onclick={() => setIsReporing(!isReporing)} />}

    </Styled.ProfileSlideWrapper>
  );
}

ProfileSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
  publicview: Prop.bool,
  ownerview: Prop.bool,
  lazy: Prop.bool,
};
