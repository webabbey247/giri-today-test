import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToastStatus = 'success' | 'error' | 'info' | null; // you can extend this

export interface SettingsState {
  showToast: boolean;
  toastMsg: string | null;
  toastStatus: ToastStatus;
  minimumPrice: null,
  maximumPrice: null
}

export interface actionSheetPayload {
  minimumPrice: null,
  maximumPrice: null
}

export interface ToastPayload {
  showToast: boolean;
  toastMsg: string | null;
  toastStatus: ToastStatus;
}

const initialState: SettingsState = {
  showToast: false,
  toastMsg: null,
  toastStatus: null,
  minimumPrice: null,
  maximumPrice: null,
};

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    displayResponseToast: (state, action: PayloadAction<ToastPayload>) => {
      state.showToast = action.payload.showToast;
      state.toastMsg = action.payload.toastMsg;
      state.toastStatus = action.payload.toastStatus;
    },

     filterPriceAction: (state, action: PayloadAction<actionSheetPayload>) => {
      state.minimumPrice = action.payload.minimumPrice;
      state.maximumPrice = action.payload.maximumPrice;
    },
  },
});

export const { displayResponseToast, filterPriceAction } = settingSlice.actions;
export default settingSlice.reducer;
