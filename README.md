## Getting Started

The idea behind this project was to demonstrate the control of behavior from the user interface to the "backend" using Behavior-Driven Development (BDD). It also showcases how one can utilize Storybook and BDD for development without the need to open a browser. Efforts were made to ensure the user interface is mobile-friendly. As part of the user experience design, traditional lists were replaced with a step or slide mechanism for navigating through the news.

FYI: I commited the .env file as this is just a test project, so non of the reviewers need to copy it. It is not recommended on production environemnt. 

### Running Chrome with Web Security Disabled for Development

To focus on other aspects of the interview task and simplify the process, we will temporarily disable web security.

Therefore, we'll be running Google Chrome with web security disabled. This is purely for ease of development and testing, and is not recommended for regular browsing due to the security risks involved.

To run Google Chrome with web security disabled, use the following command:

```bash
open -n -a "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev_session"
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser (with disabled web security) to see the result.

## Running Tests

You can run the test suite using the following command:

```bash
npm run test
```


# Storybook
Storybook is a tool for developing UI components in isolation. It can help you build components without needing to worry about app-specific dependencies and requirements.

You can start Storybook using the following command:

```bash
npm run storybook
```

# TODO

- refactor the container file
- do not use tsx extension everywhere
- refactor the onNext and onPrevious, sagas or slice better place for them.
- add comment secion to right side 
- generic error handling
- error handling on UI
- placeholder in case of no new news
- handle the issue with render cleanup
- implement slide on mobile view
- remove the buttons on mobile view
- check the url in tests
- remove all the custom style form all the components
- get the api base url from config
- create a better type for the news service to be able to remove the unnecessary functions
