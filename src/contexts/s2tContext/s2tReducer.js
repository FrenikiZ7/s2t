import * as types from './s2tTypes';

export const s2tReducer = (state, action) => {
  switch (action.type) {
    case types.show_data: {
      return { ...state };
      // padrão usado: return { ...state, player: [...action.payload] };
    }

    default: {
      return { ...state };
    }
  }
};
