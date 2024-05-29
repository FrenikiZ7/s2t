import * as types from './playerTypes';

export const playerReducer = (state, action) => {
  switch (action.type) {
    case types.reveal_player: {
      return { ...state, player: [...action.payload] };
    }

    default: {
      return { ...state };
    }
  }
};
