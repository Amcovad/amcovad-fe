import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'
import user from './slices/user'
import bank from './slices/bank'

export const store = configureStore({
  reducer: {
    auth,
    user,
    bank
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch