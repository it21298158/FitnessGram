import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTAPI } from "../apis/post.api";

export const savePost = createAsyncThunk("post/savePost", async (data) => {
  const response = await POSTAPI.savePost(data);
  return response.data;
});

//meal plan post
export const saveMealPost = createAsyncThunk("post/saveMealPost", async (data) => {
  const response = await POSTAPI.saveMealPost(data);
  return response.data;
});
//workouts plan post
export const saveWorkoutPlanPost = createAsyncThunk("post/saveWorkoutPlanPost", async (data) => {
  const response = await POSTAPI.saveWorkoutPlanPost(data);
  return response.data;
});
//workout post
export const saveWorkoutPost = createAsyncThunk("post/saveWorkoutPost", async (data) => {
  const response = await POSTAPI.saveWorkoutPost(data);
  return response.data;
});

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const response = await POSTAPI.getPosts();
  return response.data;
});

export const getPostById = createAsyncThunk("post/getPostById", async (id) => {
  const response = await POSTAPI.getPostById(id);
  return response.data;
});

export const getPostsByUserId = createAsyncThunk(
  "post/getPostsByUserId",
  async (id) => {
    const response = await POSTAPI.getPostsByUserId(id);
    return response.data;
  }
);

export const updatePostById = createAsyncThunk(
  "post/updatePostById",
  async (data) => {
    const response = await POSTAPI.updatePostById(data.id, data);
    return response.data;
  }
);

export const likePostById = createAsyncThunk(
  "post/likePostById",
  async (data) => {
    const response = await POSTAPI.likePostById(data.id, data);
    return response.data;
  }
);

export const deletePostById = createAsyncThunk(
  "post/deletePostById",
  async (id) => {
    const response = await POSTAPI.deletePostById(id);
    return id;
  }
);
