import instance from 'services/interceptor';

const url = {
  user_get: '',
  user_post: '',
  user_update: '',
  user_delete: '',
};

const domainAService = {
  getUser: async () => {
    try {
      const response = await instance.get(url.user_get);
    } catch (error) {
      console.log(error);
    }
  },

  createUser: async () => {
    try {
      const response = await instance.post(url.user_get);
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async () => {
    try {
      const response = await instance.put(url.user_get);
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async () => {
    try {
      const response = await instance.delete(url.user_get);
    } catch (error) {
      console.log(error);
    }
  },

};

export default domainAService;
