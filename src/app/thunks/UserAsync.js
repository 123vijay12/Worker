import { createAsyncThunk } from "@reduxjs/toolkit";
import createUserAPI from "../api/userAPI";

export const createUser= createAsyncThunk(
    'users/createUser', 
    async (userData) => {
    try {
      const response = await createUserAPI(userData);
      return response;
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  });