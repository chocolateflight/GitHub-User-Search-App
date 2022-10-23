# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size ✅
- See hover states for all interactive elements on the page ✅
- Search for GitHub users by their username ✅
- See relevant user information based on their search ✅
- Switch between light and dark themes ✅

### Links

- Solution URL: [GitHub Repository](https://github.com/chocolateflight/GitHub-User-Search-App)
- Live Site URL: [Vercel](https://github-user-search-app-amber.vercel.app/)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- VS Code
- Mobile-first workflow

### What I learned

This was my first project in which I used NextJS and Tailwind CSS. It was very exciting for me to see the differences between Next and React, to use the different Next features like the API, and also to see how Tailwind changes the process of writing CSS.

Dynamic Routes

```js
async function handler(req, res) {
  let userData;
  if (req.method === 'GET') {
    const { username } = req.query;
    const response = await fetch(`https://api.github.com/users/${username}`);
    userData = await response.json();
    res.status(200).send(userData);
  }
}

export default handler;
```

Dynamic Content

```js
{
  blog ? (
    <a
      className={`col-span-7 text-xs ${
        blog ? 'text-lm-color2 hover:text-lm-color1' : 'text-lm-color8'
      } ${
        blog ? 'dark:text-dm-color2 dark:hover:text-lm-color1' : 'dark:text-lm-color2'
      }`}
      href={blog}
      target='_blank'
      rel='noopener noreferrer'
    >
      {blog ? blog : 'unavailable'}
    </a>
  ) : (
    <p
      className={`col-span-7 text-xs ${blog ? 'text-lm-color2' : 'text-lm-color8'} ${
        blog ? 'dark:text-dm-color2' : 'dark:text-lm-color2'
      }`}
    >
      {blog ? blog : 'unavailable'}
    </p>
  );
}
```

### Continued development

In the next steps, I would like to get to know both NextJS and Tailwind CSS better, so that I can perhaps get started with back-end development via NextJS. At the same time, I would like to work a bit more with Vanilla JS to understand the language better. 

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs/) - The Tailwind CSS docs are a fantastic tool to get started with Tailwind. Great explanations, simple to understand
- [NextJS Crash Course](https://www.youtube.com/watch?v=MFuwkrseXVE) - This amazing tutorial from [Academind](https://academind.com/) was a great help in getting started with Next

## Author

- GitHub - [@chocolateflight](https://github.com/chocolateflight)
- Frontend Mentor - [@chocolateflight](https://www.frontendmentor.io/profile/chocolateflight)