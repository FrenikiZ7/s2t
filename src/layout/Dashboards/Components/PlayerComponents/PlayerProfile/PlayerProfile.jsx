import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './PlayerProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { ProfileSlide } from '../../../../../components/elements/ProfileSlide/ProfileSlide';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Row } from '../../../../../components/RowContainer/Row';

export function PlayerProfile() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.PlayerProfileContainer>

      <ProfileInfo items={playerState.profile.info} />

      <ProfileSlide items={playerState.profile.photos} title="Fotos / Vídeos" />

      <Row>
        <Historic items={playerState.profile.clubs} title="Histórico de clubes" />
        <Historic items={playerState.profile.studies} title="Histórico acadêmico" />
      </Row>

      <TextSlide items={playerState.profile.championships} title="Títulos e prêmios:" />
    </Styled.PlayerProfileContainer>
  );
}
