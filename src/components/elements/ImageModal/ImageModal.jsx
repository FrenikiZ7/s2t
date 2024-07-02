import Prop from 'prop-types';
import React, { useState } from 'react';
import ImageZoom from 'react-image-zooom';
import { Close } from '@styled-icons/material-outlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './ImageModal-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';
import 'swiper/css/bundle';

export function ImageModal({ onclick, imagesrc }) {
  // const imageZoomElement = document.querySelector('.fullView'); // Seletor CSS para o seu ImageZoom
  // const hasOpenedClass = imageZoomElement.classList.contains('opened');

  // if (hasOpenedClass) {
  //   // O ImageZoom possui a classe "opened"
  //   console.log('ImageZoom está aberto!');
  // } else {
  //   // O ImageZoom não possui a classe "opened"
  //   console.log('ImageZoom não está aberto.');
  // }

  return (
    <>
      {imagesrc && (
      <Styled.ModalWrapper>

        <Styled.ImageModalContainer>

          <Styled.ImageContainer>
            <ImageZoom
              src={imagesrc}
              alt="Imagem em tela cheia"
              zoom={200}
            />
          </Styled.ImageContainer>

          <IconDiv name="Fechar imagem" hovercolor={theme.colors.red} onclick={onclick}>
            <Close />
          </IconDiv>

        </Styled.ImageModalContainer>

      </Styled.ModalWrapper>
      )}
    </>
  );
}

ImageModal.propTypes = {
  imagesrc: Prop.string,
  onclick: Prop.func,
};
