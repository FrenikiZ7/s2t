import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './PlayerHome-Styles';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { VerticalSoloSlide } from '../../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { BannerSlide } from '../../../../../components/elements/BannerSlide/BannerSlide';
import { VerticalVideoSlide } from '../../../../../components/elements/VerticalVideoSlide/VerticalVideoSlide';

export function PlayerHome() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.PlayerHomeContainer>

      <BannerSlide slidesperview={2} backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <VerticalSoloSlide title="Social" size="400px" items={s2tState.news} />
        <VerticalMiniSlide title="Ranking" type="referralrank" items={s2tState.rankings.referral} />
      </BannerSlide>

      <BannerSlide title="Vídeos em alta" lazy="false" slidesperview={2}>

        <VerticalVideoSlide size="300px" items={s2tState.news} title="Profissional" type="video" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Semi- profissional" type="video" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Universitário" type="video" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Amador" type="video" />
        <VerticalVideoSlide size="300px" items={s2tState.news} title="Recreacional" type="video" />

      </BannerSlide>

      <BannerSlide slidesperview={2} backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png" gradientdirection="to top">
        <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events} />
        <VerticalMiniSlide title="Notícias" type="news" items={s2tState.news} />
      </BannerSlide>

    </Styled.PlayerHomeContainer>
  );
}

PlayerHome.propTypes = {
};
