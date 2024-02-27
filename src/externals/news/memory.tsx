import { NewsPersistentServiceType } from '@/externals/news'

import { NewsItem } from '@/internals/news'

let newsIds: string[] = []
let news: NewsItem[] = []
export const memoryNewsPersistentService = (): NewsPersistentServiceType => {
  return Object.freeze({
    addNewsItem: async (newNewsItem: NewsItem): Promise<void> => {
      news.push(newNewsItem)
      newsIds = [...newsIds, newNewsItem.id];
    },
    getNewsIds: async (): Promise<string[]> => {
      return newsIds
    },
    getNewsItem: async (id: string): Promise<NewsItem> => {
      return news.find(newsItem => newsItem.id === id) as NewsItem
    },
    reset: () => {
      newsIds = []
      news = []
    }
  })
}