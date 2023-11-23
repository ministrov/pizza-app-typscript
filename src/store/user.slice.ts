import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { LoginResponse } from '../interfaces/auth.interface';
import { PREFIX } from '../helpers/API';
import axios from 'axios';

export const JWT_PERSISTEN_KEY = 'userData';

export interface UserPersistantState {
  jwt: string | null
}

export interface UserState {
  jwt: string | null;
  loginState: null | 'rejected';
}

const initialState: UserState = {
  jwt: loadState<UserPersistantState>(JWT_PERSISTEN_KEY)?.jwt ?? null,
  loginState: null
};

export const login = createAsyncThunk('user/login', 
  async (params: { email: string, password: string}) => {
    const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
      email: params.email,
      password: params.password
    });

    return data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.jwt = action.payload.access_token;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(state, action);
    });
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;


