
import { all, put, takeLatest } from 'redux-saga/effects'


import { fetchNewsItem } from '@/internals/news/thunks';

interface FetchNewsItemAction {
  type: string;
  payload: string;
}

function* watchFetchNewsItem () {
  yield takeLatest('FETCH_NEWS', function* (action: FetchNewsItemAction) {
    yield put(fetchNewsItem(action.payload));
  });
}

export function* newsSaga () {
  yield all([
    watchFetchNewsItem(),
  ]);
}