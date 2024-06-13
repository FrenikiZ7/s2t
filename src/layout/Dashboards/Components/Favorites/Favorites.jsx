// import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Favorites-Style';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { ProfileSlide } from '../../../../components/elements/ProfileSlide/ProfileSlide';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridProposals } from '../../../../components/elements/GridProposals/GridProposals';
import { SlideProposals } from '../../../../components/elements/SlideProposals/SlideProposals';

export function Favorites() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.FavoritesContainer>
      <ProfileSlide items={s2tState.videos.trending} title="Vídeos em alta" />

      <ProfileSlide items={s2tState.videos.trending} title="Meus vídeos favoritados" />

      <GridProposals title="Oportunidades favoritas" items={s2tState.proposals[playerState.type.gender].agents[playerState.type.category]} />
    </Styled.FavoritesContainer>
  );
}

Favorites.propTypes = {
  // children: Prop.node.isRequired,
};
