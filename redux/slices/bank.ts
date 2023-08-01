import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserType } from '@/types/index';

interface State {
    banks: [] | any; 
  }
  
  const initialState: State = {
    banks: [],
  };

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    setBank: (state, action: PayloadAction<any>) => {
        state.banks = action.payload;
    },
  },
});

export const { setBank } = bankSlice.actions;
export default bankSlice.reducer;
