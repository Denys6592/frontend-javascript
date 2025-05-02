import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectId: "",
};

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjectState: (state, action) => {
            console.log('payload is ', action.payload);
            state.projectId = action.payload;
        },
    },
});

export const { setProjectState } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;