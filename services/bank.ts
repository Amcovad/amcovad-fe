import axios, { AxiosResponse } from 'axios';
// import { UserType } from '@/types/index';
import { API_URL } from '@/utils/constant';
import axiosInstance from 'axiosInterceptor';



// interface UserData {
//   // Define the structure of user data for registration
//   email: string;
//   password: string;
//   firstName:string;
//   lastName:string;
// }

// interface Credentials {
//   // Define the structure of credentials for login
//   email: string;
//   password: string;
// }

// interface AuthResponse {
//   token: string;
//   user: UserType; 
// }

const bankService = {
  add: async (bankData:any): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.post(`${API_URL}/bank`, bankData);
    return response.data;
  },

  getBanks: async (): Promise<any> => {
    const response: AxiosResponse<any> = await axiosInstance.get(`${API_URL}/bank`)
    return response.data;
  },
};

export default bankService;
