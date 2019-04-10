import axios from 'axios';

const getUser = async () => {
  const user = await axios.get('https://randomuser.me/api/?results=1');
  return user.data.results[0];
};

export default getUser;
