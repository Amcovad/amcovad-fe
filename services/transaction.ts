import { AxiosResponse } from 'axios';
import { API_URL } from '@/utils/constant';
import axiosInstance from 'axiosInterceptor';



const transactionService = {
  create: async (data:any): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.post(`${API_URL}/transaction`, data);
    return response.data;
  },

  getUserTransactions: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/transaction/user`);
    return response.data;
  },


  getTransaction: async (id:string): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/transaction/${id}/user`);
    return response.data;
  },

  getActiveTransactions: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/transaction/user/active`);
    return response.data;
  },


  getActiveTransaction: async (id:string): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/transaction/${id}`);
    return response.data;
  },


  getTransactionInvitations: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/transaction/invitations`);
    return response.data;
  },


  updateTransactionHistory: async (data:any): Promise<any> => {
    const {id,...payload} = data
    const response: AxiosResponse<any> = await axiosInstance.patch(`${API_URL}/transaction/${id}/updateloanhistory`,payload);
    return response.data;
  },



};

export default transactionService;
