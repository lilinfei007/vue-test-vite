import _axios from './interface.js';

export const getList = () => {
  return _axios.get('/list');
}

export const add = (body) => {
  return _axios.post('/add',body);
}