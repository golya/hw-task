import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchNewsIds, fetchNewsItem } from '@/internals/news/thunks';
import { NewsItem } from '@/internals/news';

interface NewsState {
  newsIds: string[];
  isNewsLoading: boolean;
  newsItemData: Record<string, NewsItem>;
  selectedNewsIndex: number | null;
  selectedNewsId: string | null;
}

const initialState: NewsState = {
  newsIds: [],
  isNewsLoading: true,
  newsItemData: {},
  selectedNewsIndex: null,
  selectedNewsId: null
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    updateSelectedNewsIndex: (state, action: PayloadAction<number>) => {
      state.selectedNewsIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewsIds.pending, (state) => {
      state.isNewsLoading = true
    })
    builder.addCase(fetchNewsIds.fulfilled, (state, action) => {
      state.newsIds = action.payload
      if (state.selectedNewsIndex === null && action.payload.length > 0) {
        state.selectedNewsIndex = 0
        state.selectedNewsId = action.payload[state.selectedNewsIndex]
      }
    })
    builder.addCase(fetchNewsItem.pending, (state) => {
      state.isNewsLoading = true
    })
    builder.addCase(fetchNewsIds.rejected, (state) => {
      state.isNewsLoading = false
    })
    builder.addCase(fetchNewsItem.fulfilled, (state, action) => {
      state.isNewsLoading = false
      state.newsItemData[action.payload.id] = action.payload
      state.selectedNewsId = action.payload.id
    })
  }
});


export const { updateSelectedNewsIndex } = newsSlice.actions;

export default newsSlice.reducer;