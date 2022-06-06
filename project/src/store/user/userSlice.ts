import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../const';

type StateType = {
  authorizationStatus: AuthStatus;
};

const initialState: StateType = {
  authorizationStatus: AuthStatus.Unknown,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth(state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { setUserAuth } = userSlice.actions;

export default userSlice.reducer;
