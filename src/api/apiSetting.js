import axios from 'axios';

export const instance = axios.create({
  baseURL:
    'https://vue-practice-142ce-default-rtdb.firebaseio.com/surveys.json',
});
