import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeStyle } from '~constants/types';

const settingSlice = createSlice({
  name: 'settingsReducer',
  initialState: {
    userTheme: 'auto',
  },
  reducers: {
    setUserColorScheme: (state, action: PayloadAction<ThemeStyle>) => {
      state.userTheme = action.payload;
    },
  },
});

export const { setUserColorScheme } = settingSlice.actions;
const settingsReducer = settingSlice.reducer;
export default settingsReducer;
