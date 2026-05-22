import _axios from './interface.js';

export const getList = () => {
  return _axios.get('/todo/list');
}

export const add = (body) => {
  return _axios.post('/todo/add',body);
}

export const put = (id,body) => {
  return _axios.put(`/todo/update/${id}`,body);
}

export const del = (id) => {
  return _axios.delete(`/todo/delete/${id}`);
}