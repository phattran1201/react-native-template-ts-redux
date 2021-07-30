import AsyncStorage from '@react-native-community/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '~reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export type RootState = ReturnType<typeof store.getState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: any[] = [thunkMiddleware];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store);

export default store;
