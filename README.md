# Slash Frontend Task: Blog Application

This README will guide you through the steps to set up and run the project locally.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Features](#features)
- [Key Decisions](#key-decisions)
- [Technologies used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** : You can download it from [nodejs.org](https://nodejs.org/)
- **npm** : Node.js package manager.

## Installation

To install the project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Husseinn-Essam/Slash-Frontend-Task.git
   cd Slash-Frontend-Task
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

## Running the Project

Once the dependencies are installed, you can run the project locally:

1. **Start the development server**:

   ```sh
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

2. **Build the project for production**:

   ```sh
   npm run build
   ```

3. **Run the production build**:

   ```sh
   npm start
   ```

## Features

1. Display a list of blog posts from the DummyJSON API.

2. Show details of a single blog post, including post metrics (Likes, Dislikes, Views), Categories, Post Content, and Author.

3. Loading states for posts catalog and post page.

4. Create a blog post with:
   - Success Notification.
   - Form validation.


## Key Decisions

The following key decisions were made during the development process:

- To achieve faster initial page load, the Posts Catalog and cards were implemented as server-side components.

- I decided to make the author name a server component because it does its own fetching of data and i didn't want to block the rendering of the blog post while waiting for the author name to load 

- For better SEO, I used the generateMetadata function for dynamic metadata thats depends on post page.

- I used TypeScript for Type Saftey.

- I have Implemented a loading state while fetching data for both the Post page and the Post catalog.

- I used Tailwind CSS because it is supported in Server Components and it works exceptionally well with Next.js.
## Technologies Used

- Next.js v14
- React v18
- TypeScript v5
- Tailwind CSS v3
