import { NewsItem } from '@/internals/news'

export const getNewsItem = async (id: string): Promise<NewsItem> => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}
