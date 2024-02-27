import { createAsyncThunk } from "@reduxjs/toolkit";

import { container, TOKENS } from '@/container'
import { NewsItem } from '@/internals/news'

export const fetchNewsIds = createAsyncThunk(
  'news/getNewsIds',
  async (_, { dispatch }) => {
    const newsPersistentService = container.get(TOKENS.newsPersistentService)
    const response = await newsPersistentService.getNewsIds()
    if (response.length > 0) {
      dispatch(fetchNewsItem(response[0]));
    }
    return response
  }
)

export const fetchNewsItem = createAsyncThunk(
  'news/getNewsItem',
  async (id: string): Promise<NewsItem> => {
    const newsPersistentService = container.get(TOKENS.newsPersistentService)
    return newsPersistentService.getNewsItem(id)
  }
)