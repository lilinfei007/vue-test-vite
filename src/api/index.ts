import _axios from './interface.js';
type Response = {
  status: number;
  data: unknown;
  message: string;
}

const request= (promise:Promise<unknown>) => {
 return promise as Promise<Response>;
}

type requestRes = Awaited<ReturnType<typeof request>>;

export const getList = () => {
  return _axios.get('/todo/list');
}

export const add = (body: object) => {
  return _axios.post('/todo/add',body) as Promise<requestRes>;
  // return request(_axios.post('/todo/add',body));
}
// export const add = (body: object):  Promise<requestRes> => {
//   // return request(_axios.post('/todo/add',body));
//   return request(_axios.post('/todo/add',body));
// }

export const put = (id: string,body: object) => {
  return _axios.put(`/todo/update/${id}`,body);
}

export const del = (id: string) => {
  return _axios.delete(`/todo/delete/${id}`);
}