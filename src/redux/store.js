import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { trucksReducer } from './trucks/slice';
import { truckReducer } from './truck/slice';
import { filterReducer } from './filtersTruck/slice';
import { favoriteReducer } from './favoritesTrucks/slice';

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    truck: truckReducer,
    filter: filterReducer,
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
