import { getNewsIds } from './getNewsIds'
import { getNewsItem } from './getNewsItem'
import { NewsItem } from '@/internals/news'

export interface NewsPersistentServiceType {
  addNewsItem: (newNewsItem: NewsItem) => Promise<void>
  reset: () => void
  getNewsIds: () => Promise<string[]>
  getNewsItem: (id: string) => Promise<NewsItem>
}

export const newsPersistentService = (): NewsPersistentServiceType => {
  return Object.freeze({
    addNewsItem: () => Promise.resolve(),
    reset: () => { },
    getNewsItem,
    getNewsIds,
  })
}
