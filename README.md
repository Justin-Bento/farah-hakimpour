# Farah Hakimpour - Portfolio Website

This repository hosts the code for Farah Hakimpour's personal portfolio website, the goal of this website is to showcase her projects as a Graphic Designer and Illustrator. 

## Features

- Implimented Sanity Content Management System to controll projects showcased within the app.
- Setup a form request to ensuring clients email her work address.
- Light and Dark mode using Tailwind CSS.
- Mobile-First Design approach
- Soft Animation's throughout the website to ease the page transition.

## Technologies

- **Front End:** HTML, CSS, Tailwind CSS, PostCSS, JavaScript, TypeScript , React.js, clsx, eslint, react-icons, react-icons
- **Back End:** Node, Next.js, Express, next-sanity, react-hook-form,
- **Business:** Google Analytics and Formspree.

## Run Locally
Clone the project

```bash
  git clone git@github.com:Justin-Bento/farah-hakimpour.git
```

Go to the project directory

```bash
  cd path/to/project/farah-hakimpour
```

Install dependencies

```bash
  npm install
```

Setup Environment Variables for Sanity 

```bash
  touch .env.local
```
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_PROJECT_ID

Start the server

```bash
  npm run dev
```
## Challenges Faced 🤯

1. Setting up and integrating the content management system to ensure smooth project uploads and updates.
2. Resolving Post CSS issues and ensuring proper functionality in the website's design.
3. Implementing data retrieval and posting functionalities to interact with the Sanity API effectively.
4. Handling filtering of an array of objects within JavaScript to showcase projects seamlessly.
5. Deploying website using vercels new layout.

## Lessons Learned

When working with content management systems, I faced challenges in customizing and creating unique datasets for the client, particularly after the version upgrade to the Sanity Content Management System. To address this, I learned how to leverage Next.js catch-all segments and API calls to dynamically fetch and display customized backend content. This solution not only streamlined the content publishing process but also empowered the client (Fara) to independently manage and publish the content she wanted moving forward. Through this experience, I gained a deeper understanding of Sanity CMS customization, Next.js dynamic routing, and API integration, which improved my ability to deliver scalable and user-friendly solutions.
