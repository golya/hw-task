import React from 'react';
import { Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { AppDispatch, RootState } from '@/store'
import NewsItem from '@/components/NewsItem'
import { fetchNewsIds } from '@/internals/news/thunks';

import { updateSelectedNewsIndex } from '@/internals/news/slice'

export default function NewsPage () {
  const dispatch: AppDispatch = useDispatch()
  const newsItems = useSelector((state: RootState) => state.news.newsItemData)
  const news = useSelector((state: RootState) => state.news)

  useEffect(() => {
    dispatch(fetchNewsIds())
  }, [])

  const onNext = () => {
    if (news.selectedNewsIndex === null || news.selectedNewsIndex > news.newsIds.length) return
    const newIndex = news.selectedNewsIndex + 1
    updateNewsSetup(news.newsIds[newIndex], newIndex)
  }

  const onPrevious = () => {
    if (news.selectedNewsIndex === null || news.selectedNewsIndex === 0) return
    const newIndex = news.selectedNewsIndex - 1
    updateNewsSetup(news.newsIds[newIndex], newIndex)
  }

  const updateNewsSetup = (newsId: string, newIndex: number) => {
    dispatch({ type: 'FETCH_NEWS', payload: newsId })
    dispatch(updateSelectedNewsIndex(newIndex))
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }} direction="column">
      <Grid item>
        <Typography variant="h3" color="darkorange">Hacker news</Typography>
      </Grid>
      <Grid item>
        {news.selectedNewsId && <NewsItem
          newsItem={newsItems[news.selectedNewsId]}
          isNewsLoading={news.isNewsLoading}
          onNext={onNext}
          onPrevious={onPrevious}
        />}
      </Grid>
    </Grid>
  );
}
