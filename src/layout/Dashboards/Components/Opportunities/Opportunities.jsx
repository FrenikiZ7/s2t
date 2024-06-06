import React, { useContext } from 'react';
import * as Styled from './Opportunities-Styles';
import { GridProposals } from '../../../../components/elements/GridProposals/GridProposals';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';

export function Opportunities() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.OpportunitiesContainer>

      <GridProposals title="Agentes" items={s2tState.proposals[playerState.type.gender].agents[playerState.type.category]} />

      {/* <GridProposals title="Clubes" items={s2tState.proposals[playerState.type.gender].clubs[playerState.type.category]} /> */}

    </Styled.OpportunitiesContainer>
  );
}
