import { Container, token } from 'brandi'

import { type NewsPersistentServiceType, newsPersistentService } from '@/externals/news'
import { memoryNewsPersistentService } from '@/externals/news/memory'

const isServer = process.env.MODE === 'server' || process.env.MODE === 'test'

if (!isServer) {
  process.env.NEWS_SERVICE = 'hackernews'
}

export const TOKENS = {
  newsPersistentService: token<NewsPersistentServiceType>('newsPersistentService'),
}

export const container = new Container()

const newsServiceType = process.env.NEWS_SERVICE

if (newsServiceType === 'memory' || newsServiceType === undefined) {
  container
    .bind(TOKENS.newsPersistentService)
    .toInstance(memoryNewsPersistentService)
    .inTransientScope()
} else {
  container.bind(TOKENS.newsPersistentService).toInstance(newsPersistentService).inTransientScope()
}