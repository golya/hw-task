import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import moment from 'moment'

import { NewsItem } from '@/internals/news'
import Loading from '@/components/Loading'

interface NewsItemProps {
  newsItem: NewsItem,
  isNewsLoading: boolean,
  onNext: () => void,
  onPrevious: () => void
}

export default function NewsItemComponent ({ newsItem, isNewsLoading, onNext, onPrevious }: NewsItemProps): JSX.Element {

  return (
    <>
      <Loading open={isNewsLoading} />
      {newsItem && <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} key={newsItem.id}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div">
                {newsItem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {newsItem.score} points by {newsItem.by} {moment.unix(newsItem.time).fromNow()} | {newsItem.descendants} comments
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={newsItem.url} target="_blank">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      }
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <Button onClick={onPrevious}>Previous</Button>
        </Grid>
        <Grid item>
          <Button onClick={onNext}>Next</Button>
        </Grid>
      </Grid>
    </>
  );
}