import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './ClubFavorites-Style';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { ProfileSlide } from '../../../../../components/elements/ProfileSlide/ProfileSlide';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridCards } from '../../../../../components/elements/GridCards/GridCards';

export function ClubFavorites({ children }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.ClubFavoritesContainer>
      <ProfileSlide items={s2tState.videos.trending} title="Vídeos em alta" />

      <ProfileSlide items={s2tState.videos.trending} title="Vídeos favoritados" />

      <GridCards title="Jogadores favoritos" items={playerState.friends} />
    </Styled.ClubFavoritesContainer>
  );
}

ClubFavorites.propTypes = {
};
