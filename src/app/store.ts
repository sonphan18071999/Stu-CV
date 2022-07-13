import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/reducer/counterSlice';
import userInformationReducer from '../redux/reducer/userInformationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInformation: userInformationReducer
  }
})

// highlight-start
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// highlight-end