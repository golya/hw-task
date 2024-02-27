import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import newsSlice from '@/internals/news/slice'
import { newsSaga } from '@/internals/news/sagas'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(newsSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
