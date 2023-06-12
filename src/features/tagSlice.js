import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMailsAsync = createAsyncThunk('tag/fetchMails', async () => {
  const response = await axios.get('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123');
  return response.data;
});

const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    value: 'inbox',
    selected: false,
    mails: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setTag: (state, action) => {
      state.value = action.payload;
      state.selected = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMailsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mails = action.payload;
      })
      .addCase(fetchMailsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setTag } = tagSlice.actions;
export default tagSlice.reducer;
