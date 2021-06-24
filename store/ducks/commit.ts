import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface commits {
  commit: any[];
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface Params {
  version: string;
  cv?: any;
}

export type commitState = {
  commits: any[];
  trending: any[];
  keyword: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
};

type commitAction = {
  type: string;
  payload: commits;
};

const initialState: commitState = {
  commits: [],
  trending: [],
  keyword: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
};
export const fetchCommits: any = createAsyncThunk(
  "commits/fetchCommits",
  async ({ repo }: any, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo}/commits`
      );
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchTrending: any = createAsyncThunk(
  "commits/fetchTranding",
  async () => {
    try {
      var date = new Date();
      date.setDate(date.getDate() - 13);
      const d = date.toISOString().slice(0, 10);
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>=${d}&sort=stars&order=desc`
      );
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        console.log(data.items);
        return data.items;
      } else {
        return;
      }
    } catch (e) {
      console.log("Error", e.response.data);
    }
  }
);

export const commitSlice: any = createSlice({
  name: "commit",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
    handleKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
  },
  extraReducers: {
    [fetchCommits.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.commits = payload;
    },
    [fetchCommits.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchCommits.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },
    [fetchTrending.fulfilled]: (state, { payload }) => {
      state.trending = payload;
    },
  },
});

export const { clearState, handleKeyword } = commitSlice.actions;

export const commitSelector = (state: any) => state.product;
