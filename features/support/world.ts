import { Before } from '@cucumber/cucumber';
import { cleanup } from '@testing-library/react'

import { container, TOKENS } from '@/container'

Before(async function () {
  const newsPersistentService = container.get(TOKENS.newsPersistentService)
  await newsPersistentService.reset();
  cleanup()
});