/** ****************************************
 * Project: react-redux-group-project
 * File: store.js
 * Created: 4/24/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },

});

export default store;
