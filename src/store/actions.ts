import {createSlice} from '@reduxjs/toolkit';

export interface PullToRefreshState {
  pullToRefreshTriggered: boolean;
}

const initialState: PullToRefreshState = {
  pullToRefreshTriggered: false,
};

export const pullToRefreshSlice = createSlice({
  name: 'pullToRefresh',
  initialState,
  reducers: {
    changeStatus: state => {
      state.pullToRefreshTriggered = !state.pullToRefreshTriggered;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeStatus} = pullToRefreshSlice.actions;

export default pullToRefreshSlice.reducer;
