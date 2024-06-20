import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close } from '@styled-icons/material-outlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './ImageModal-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';
import 'swiper/css/bundle';

export function ImageModal({ isopen, onclick }) {
  return (
    <Swiper
      zoom
      fadeEffect
      slidesPerView={1}
    >
      {isopen && (
      <Styled.ModalWrapper>
        <SwiperSlide>

          <Styled.ImageModalContainer>
            <IconDiv name="Fechar imagem" hovercolor={theme.colors.red} onclick={onclick}>
              <Close />
            </IconDiv>
            <div className="swiper-zoom-container">

              <Styled.ImageModal src="https://images.pexels.com/photos/25312271/pexels-photo-25312271/free-photo-of-a-woman-sitting-on-a-cube-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ng" alt="" />
            </div>

          </Styled.ImageModalContainer>
        </SwiperSlide>

      </Styled.ModalWrapper>

      )}
    </Swiper>
  );
}

ImageModal.propTypes = {
  isopen: Prop.bool,
};
