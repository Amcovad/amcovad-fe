import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@/types/index';

interface State {
    user: null | UserType; // Adjust UserType based on your user structure
  }
  
  const initialState: State = {
    user: null,
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
        state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
