import _axios from './interface.js';

export const getList = () => {
  return _axios.get('/list');
}

export const add = (body) => {
  return _axios.post('/add',body);
}

export const put = (id,body) => {
  return _axios.put(`/update/${id}`,body);
}

export const del = (id) => {
  return _axios.delete(`/delete/${id}`);
}