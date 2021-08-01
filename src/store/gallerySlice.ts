import { createSlice } from "@reduxjs/toolkit";

interface GalleryState {
  isOpen: boolean;
  onNo: any;
  title: string;
  describe: string;
  source: string;
  demo: string;
}
const initialState: GalleryState = {
  isOpen: false,
  onNo: null,
  title: "",
  describe: "",
  source: "",
  demo: "",
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    toggleDialog(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const galleryActions = gallerySlice.actions;
export default gallerySlice;
