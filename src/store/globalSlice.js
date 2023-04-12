import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: true,
  modal: {
    status: false,
    title: "",
    desc: "",
    titleConfirm: "",
    data: "",
  },
};

const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    openModal(state, { payload }) {
      const { status, title, desc, titleConfirm, data } = payload;
      state.modal = { status, title, desc, titleConfirm, data };
    },
    closeModal: (state) => {
      state.modal = {
        status: false,
        title: "",
        desc: "",
        titleConfirm: "",
        data: "",
      };
    },
  },
});

export const { openModal, closeModal, confirmModal } = global.actions;
export const globalReducer = global;
export default global.reducer;
