import axios from 'axios';

export default axios.create({
  baseURL: 'https://food-recipes-assignment.herokuapp.com',
  headers: {
    Authentication: localStorage.getItem('token'),
  },
});
