# Lab1_fullstack

# Recipe Manager Application

## Overview
The Recipe Manager Application is a full-stack web application designed to allow users to discover, add, manage, and edit their favorite recipes. Built with Node.js and Express on the backend and leveraging MongoDB Atlas for database storage, this application showcases CRUD (Create, Read, Update, Delete) operations in a user-friendly web interface.

## Features
- **Discover Recipes**: Users can browse a collection of recipes.
- **Add Recipes**: Users can add new recipes by providing details such as title, ingredients, instructions, and cooking time.
- **Edit and Delete Recipes**: Each recipe can be edited or deleted, with changes immediately reflected in the database.
- **Responsive Design**: The application is built to be responsive, ensuring a great experience on both desktop and mobile devices.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (with Fetch API for AJAX requests)
- **Backend**: Node.js with Express
- **Database**: MongoDB Atlas

## API Endpoints

- **GET `/api/recipes`**: Fetches all recipes.
- **GET `/api/recipes/:title`**: Fetches a single recipe by title.
- **POST `/api/recipes`**: Adds a new recipe. Expects a JSON payload with `title`, `ingredients`, `instructions`, and `cookingTime`.
- **PUT `/api/recipes/:id`**: Updates an existing recipe identified by `id`. Expects a JSON payload with any of `title`, `ingredients`, `instructions`, and `cookingTime` to update.
- **DELETE `/api/recipes/:id`**: Deletes an existing recipe identified by `id`.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB Atlas account

### Installation
1. Clone the repository:
```sh
git clone https://github.com/Abshir112/Lab1_fullstack.git
```

2. Environment Variables
Create a `.env` file in the root directory of the project with the following environment variables:
```sh
PORT=3000
MONGODB_URI=<your_mongodb_uri>
```

Ensure to replace `<your_mongodb_uri>` with your MongoDB Atlas connection string.


Enjoy the Recipe Manager Application! 🚀
