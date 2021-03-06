import axios from '../../utils/axios';

export const getAll = user => async dispatch => {
  const recipe = await axios.get('/recipe/all');
  dispatch({
    type: 'ALL_RECIPE',
    payload: recipe.data.recipes,
  });
};

export const addRecipe = (data, callback) => async dispatch => {
  try {
    const addData = await axios.post('/recipe/add', data);
    if (addData.status !== 200) {
      alert('Something went wrong');
    } else {
      dispatch({
        type: 'ADD_RECIPE',
        payload: addData.data.recipe,
      });
      callback();
    }
  } catch (error) {
    alert('Something went wrong');
  }
};

export const fetchUserRecipe = user => async dispatch => {
  try {
    const data = await axios.post('/auth/authentication', user);
    dispatch({
      type: 'USER_RECIPE',
      payload: data.data.recipe.recipes,
    });
  } catch (error) {}
};

export const fetchRecipe = async id => {
  try {
    const data = await axios.get('/recipe/get/' + id);
    return data.data;
  } catch (error) {}
};
