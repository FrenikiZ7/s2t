import React, { useContext } from 'react';
import * as Styled from './MyOpportunities-Styles';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridEditableProposals } from '../../../../../components/elements/GridEditableProposals/GridEditableProposals';

export function MyOpportunities() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.MyOpportunitiesContainer>

      <GridEditableProposals title="Minhas oportunidades" items={s2tState.proposals[playerState.type.gender].agents[playerState.type.category]} />

    </Styled.MyOpportunitiesContainer>
  );
}
