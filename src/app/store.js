import { configureStore} from '@reduxjs/toolkit';
import tagReducer from '../features/tagSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    tag : tagReducer,
    user: userReducer
  }
});
