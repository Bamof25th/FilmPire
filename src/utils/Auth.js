import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    apikey: process.env.REACT_APP_APIKEY,
  },
});

export const fetchToken = async () => {
  try {
    const responce = await moviesApi.get('/authentication/token/new');

    const token = data.request_token;
    if(data.sucess){

    }else
  } catch (error) {
    console.log(error);
    throw new Error('notable to login', 500);
  }
};
