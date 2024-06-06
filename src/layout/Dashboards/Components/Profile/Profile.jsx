import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Profile-Styles';
import { ProfileInfo } from '../../../../components/elements/ProfileInfo/ProfileInfo';
import { ProfileSlide } from '../../../../components/elements/ProfileSlide/ProfileSlide';
import { RowContainer } from '../../../../components/RowContainer/Row-Styles.js';
import { Historic } from '../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../components/elements/TextSlide/TextSlide';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';

export function Profile() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.ProfileContainer>

      <ProfileInfo items={playerState.profile.info} />

      <ProfileSlide items={playerState.profile.photos} title="Fotos / Vídeos" />

      <RowContainer>
        <Historic items={playerState.profile.clubs} title="Histórico de clubes" />
        <Historic items={playerState.profile.studies} title="Histórico acadêmico" />
      </RowContainer>

      <TextSlide items={playerState.profile.championships} title="Títulos:" />
    </Styled.ProfileContainer>
  );
}
