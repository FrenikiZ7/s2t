import * as types from './s2tTypes';

export const s2tReducer = (state, action) => {
  switch (action.type) {
    case types.show_data: {
      return { ...state };
      // padrão usado: return { ...state, player: [...action.payload] };
    }

    case types.add_proposal: {
      return {
        ...state,
        proposals: {
          ...state.proposals,
          male: {
            ...state.proposals.male,
            professional: {
              ...state.proposals.male.professional,
              clubs: [...state.proposals.male.professional.clubs, ...action.payload],
            },
          },
        },
      }; }

    default: {
      return { ...state };
    }
  }
};
