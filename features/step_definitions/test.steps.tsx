import React from 'react';
import { Given, When, Then } from '@cucumber/cucumber';
import { render, screen, waitFor, fireEvent, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'

import { container, TOKENS } from '@/container'
import Pages from '../../pages'
import { store } from '@/store'


Given('the hacker news post a new item with title {string} with url {string}', async function (title, url) {
  const newsPersistentService = container.get(TOKENS.newsPersistentService)
  await newsPersistentService.addNewsItem({ id: title, title, url, score: 1, by: "user", time: 1709037963, descendants: 1 })
});

Then('the user see the news with title {string} and url {string}', async function (title, _) {
  render(<Provider store={store}><Pages /></Provider >)
  await waitFor(() => {
    screen.getByText(title)
  }, { timeout: 5000 });
});

Given('the user click to the next button', async function () {
  fireEvent.click(screen.getByText('Next'))
  cleanup()
});

When('the user click to the previous button', async function () {
  fireEvent.click(screen.getByText('Previous'))
  cleanup()
});
