import { createSlice } from "@reduxjs/toolkit";
import teamService from "../services/team.service";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    members: null,
    isLoading: true,
    error: null
  },
  reducers: {
    teamRequested: (state) => {
      state.isLoading = true;
    },
    teamReceved: (state, action) => {
      state.members = action.payload;
      state.isLoading = false;
    },
    teamRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: teamReducer, actions } = teamSlice;

const { teamRequested, teamReceved, teamRequestFailed } = actions;

export const loadTeamList = () => async (dispatch) => {
  dispatch(teamRequested());
  try {
    const { content } = await teamService.fetchAll();
    dispatch(teamReceved(content));
  } catch (error) {
    dispatch(teamRequestFailed(error.message));
  }
};

export const getTeam = () => (state) => state.members;
export const getTeamLoadingStatus = () => (state) => state.isLoading;
export const getTeamMember = (nick) => (state) => {
  if (state.members) {
    return state.members.find((m) => m.nick === nick);
  }
};

export default teamReducer;
