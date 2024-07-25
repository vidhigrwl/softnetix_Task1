# Task 01 - Multiple Projects

This repository contains two distinct projects that I have worked on as part of my internship with Softnetix. 

## Projects Overview

### 1. Personal Portfolio Website


## Description

This is a personal portfolio website created to showcase my skills, projects, and experience as a web developer. The website is built using HTML, CSS, and JavaScript for the frontend, and Node.js for handling backend functionalities such as contact form submissions.

**Project Folder:** `portfolio`

## Features

- **Responsive Design**: The website is designed to be responsive and looks good on all devices.
- **Projects Showcase**: A section to showcase my projects with descriptions and links.
- **Contact Form**: A functional contact form that allows visitors to send me messages directly.
- **Simple Backend**: A Node.js backend to handle contact form submissions and send emails.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Nodemailer

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   
2. **Install Dependencies(Make sure you have Node.js and npm installed. Then, install the necessary dependencies:)**

   ```bash
   npm install

4. **Set Up Environment Variables**

   ```bash
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password

6. **Start the Node.js server:**

   ```bash
   node server.js

## Usage

   - Navigate through different sections of the website to learn more about me and my projects.
   - Use the contact form to send me a message directly from the website.

## Folder Structure

      ```bash
      /portfolio
          /public
              index.html
              styles.css
              scripts.js
          server.js
          package.json
          README.md

## Contributing
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.





# 2. Recipe Sharing Platform

A web application where users can upload, browse, and search for recipes. Built with React for the frontend and Node.js with Express for the backend, and MongoDB for data storage.

## Features

- **User Authentication**: Register, log in, and manage user sessions.
- **Recipe Management**: Upload new recipes, view and search existing recipes.
- **Search Functionality**: Filter recipes by title or ingredients.

## Technologies

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- MongoDB server running (locally or remotely).

### Setup

#### 1. Clone the Repository

    ```bash
    git clone https://github.com/yourusername/recipe-sharing-platform.git
    cd recipe-sharing-platform

### 2. Install Dependencies
Frontend
    ```bash
    cd frontend
    npm install

Backend
    ```bash
    cd backend
    npm install

### 3. Environment Configuration
     ```bash
     MONGO_URI=mongodb://localhost:27017/recipe-platform
     JWT_SECRET=your_jwt_secret

     
### The frontend will be available at http://localhost:3000, and the backend API at http://localhost:5000

### Usage

Register: Go to /register to create a new account.
Log In: Go to /login to access your account.
Browse Recipes: Visit /recipes to see a list of available recipes.
Upload Recipes: Navigate to /upload to add new recipes.

### License

This project is licensed under the MIT License - see the LICENSE file for details.



