import  { AxiosResponse } from 'axios';
import { API_URL } from '@/utils/constant';
import axiosInstance from 'axiosInterceptor';


const userService = {

  getAllUsers: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/users`)
    return response.data;
  },
};

export default userService;
