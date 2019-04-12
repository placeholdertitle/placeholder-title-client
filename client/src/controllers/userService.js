import axios from 'axios';

export default {
  signup: async user => {
    const response = await axios.post('http://localhost:8000/auth/signup', user);
    return response.data;
  },
  login: async user => {
    const response = await axios.post('http://localhost:8000/auth/login', user);
    return response.data;
  },
  getUser: async token => {
    const response = await axios.get('http://localhost:8000/api/user', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};
