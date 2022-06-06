const initial_state = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id'),
  recipies: [],
};

export const UserReducers = (state = initial_state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        name: action.payload.user.name,
        email: action.payload.user.email,
        recipies: action.payload.user.recipe,
        id: action.payload.user._id,
        token: action.payload.token,
      };

    case 'SIGNUP':
      return {
        name: action.payload.user.name,
        email: action.payload.user.email,
        recipies: action.payload.user.recipies,
        token: action.payload.token,
      };
    case 'ADD_RECIPE':
      return {
        ...state,
        recipies: state.recipies.concat(action.payload),
      };
    case 'USER_RECIPE':
      return {
        ...state,
        recipies: action.payload,
      };
    case 'LOGOUT':
      return {
        name: undefined,
        email: undefined,
        recipies: [],
        token: undefined,
        id: undefined,
      };
    default:
      return state;
  }
};
