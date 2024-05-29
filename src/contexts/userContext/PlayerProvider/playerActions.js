import * as types from './playerTypes';

export const revealPlayer = (dispatch) => {
  dispatch({ type: types.reveal_player, payload: [] });
};
