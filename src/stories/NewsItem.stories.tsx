import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NewsItem from '@/components/NewsItem';

const meta: Meta<typeof NewsItem> = {
  component: NewsItem,
};

export default meta;
type Story = StoryObj<typeof NewsItem>;

export const Primary: Story = {
  render: () => <NewsItem
    newsItem={{ id: 'test', title: "title", url: "https://example.com", score: 1, by: "user", time: 1709019558, descendants: 1 }}
    isNewsLoading={false}
    onNext={() => { }}
    onPrevious={() => { }}
  />,
};

export const Loading: Story = {
  render: () => <NewsItem
    newsItem={{ id: 'test', title: "title", url: "https://example.com", score: 1, by: "user", time: 1709019558, descendants: 1 }}
    isNewsLoading={true}
    onNext={() => { }}
    onPrevious={() => { }}
  />,
};

