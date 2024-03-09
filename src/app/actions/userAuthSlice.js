import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loginAPI from '../auth/authApi';



export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginAPI(email, password);
      if (response.jwtToken) {
        window.location.href = "/workers/category";
        return response.data; // Assuming your API returns user data upon successful login
      } else {
        throw new Error('Authentication failed'); // Throw error if authentication fails
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userAuthSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    // Add other synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },  
});



export default userAuthSlice.reducer;



