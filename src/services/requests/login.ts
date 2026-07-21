import api from '../index';

export const login = {
  signInAdmin: (payload: { email: string; password: string }) => {
    return api(undefined, true).post('/auth/admin/signin', payload);
  }
};
