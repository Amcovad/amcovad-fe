import { AxiosResponse } from 'axios';
import { API_URL } from '@/utils/constant';
import axiosInstance from 'axiosInterceptor';



const connectionService = {
  add: async (data:any): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.post(`${API_URL}/connection`, data);
    return response.data;
  },

  getAcceptedConnections: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/connection`)
    return response.data;
  },

  getPendingConnections: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/connection/pending`)
    return response.data;
  },

  accept: async (id:string): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.patch(`${API_URL}/connection/${id}/accept`);
    return response.data;
  },

  decline: async (id:string): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.patch(`${API_URL}/connection/${id}/decline`);
    return response.data;
  },
};

export default connectionService;
