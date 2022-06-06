import axios from '../../utils/axios';

export const LoginAction = (user, callback) => async dispatch => {
  try {
    const auth = await axios.post('/auth/login', user);
    if (auth.status !== 200) {
      alert(auth.message);
      return;
    }
    dispatch({
      type: 'LOGIN',
      payload: auth.data,
    });
    localStorage.setItem('id', auth.data.user._id);
    localStorage.setItem('name', auth.data.user.name);
    localStorage.setItem('email', auth.data.user.email);
    localStorage.setItem('token', auth.data.token);
    callback();
  } catch (error) {
    alert(error.message);
  }
};
export const SignupAction = (user, callback) => async dispatch => {
  try {
    const auth = await axios.post('/auth/signup', user);
    if (auth.status !== 200) {
      alert(auth.message);
      return;
    }
    dispatch({
      type: 'SIGNUP',
      payload: auth.data,
    });
    localStorage.setItem('id', auth.data.user._id);
    localStorage.setItem('name', auth.data.user.name);
    localStorage.setItem('email', auth.data.user.email);
    localStorage.setItem('token', auth.data.token);
    callback();
  } catch (error) {
    alert(error.message);
  }
};

export const logoutAction = callback => async dispatch => {
  localStorage.clear();
  dispatch({
    type: 'LOGOUT',
  });
  callback();
};
