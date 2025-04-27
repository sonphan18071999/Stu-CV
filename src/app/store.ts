import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/reducer/counterSlice";
import userInformationReducer from "../redux/reducer/userInformationSlice";
import industryKnowledgeReducer from "../redux/reducer/industryKnowledgeSlice";
import languagesReducer from "../redux/reducer/languagesSlice";
import socialReducer from "../redux/reducer/socialSlice";
import experienceReducer from "../redux/reducer/experienceSlice";
import educationReducer from "../redux/reducer/educationSlice";
import mySkillReducer from "../redux/reducer/mySkillSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInformation: userInformationReducer,
    industryKnowledge: industryKnowledgeReducer,
    languages: languagesReducer,
    social: socialReducer,
    experience: experienceReducer,
    education: educationReducer,
    mySkill: mySkillReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for better performance
      immutableCheck: {
        // Customize immutable check to improve performance
        warnAfter: 128,
      },
    }),
  devTools: process.env.NODE_ENV !== "production", // Disable Redux DevTools in production
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
