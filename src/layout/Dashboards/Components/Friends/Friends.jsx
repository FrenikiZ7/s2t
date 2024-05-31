import React, { useContext } from 'react';
import * as Styled from './Friends-Styles';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';

export function Friends() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.FriendsContainer>
      <GridCards title="Amigos" items={playerState.friends} />
    </Styled.FriendsContainer>
  );
}
