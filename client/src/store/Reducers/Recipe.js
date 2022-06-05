const initial_state = {
  recipes: [],
};

export const RecipeReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'ALL_RECIPE':
      return {
        recipes: action.payload,
      };
    case 'ADD_RECIPE':
      return {
        recipes: state.recipes.concat(action.payload),
      };
    default:
      return state;
  }
};
