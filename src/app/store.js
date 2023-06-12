import { configureStore} from '@reduxjs/toolkit';
import tagReducer from '../features/tagSlice'


export const store = configureStore({
  reducer: {
    tag : tagReducer
  }
});
