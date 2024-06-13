// import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './MySquad-Styles';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { GridPlayers } from '../../../../../components/elements/GridPlayers/GridPlayers';

export function MySquad() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.MySquadContainer>
      <GridPlayers title="Jogadores" items={s2tState.users.players} />

    </Styled.MySquadContainer>
  );
}

// MySquad.propTypes = {
//   children: Prop.node.isRequired,
// };
