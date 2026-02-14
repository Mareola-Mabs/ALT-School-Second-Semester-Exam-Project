# Todo Application (React Frontend Engineering Assessment)

This project is a modern Todo application built using React. It demonstrates frontend engineering best practices including API integration, routing, state management, error handling, accessibility, and responsive UI design.

The application allows users to view, search, filter, create, update, and delete todos. It also supports authentication and protected routes, ensuring users can securely manage their own tasks.

This project was built as part of a frontend engineering assessment to showcase production-ready React development skills.


# Live Demo

Deployed Application:  
(https://mareola-todo.netlify.app/dashboard)

Repository:  
(https://github.com/Mareola-Mabs/ALT-School-Second-Semester-Exam-Project/tree/main/todo-app)

## Core Features

**Todo List and Pagination**
 - Fetches todos from the API
 - Displays todos in a structured list
 - Pagination support (10 items per page)
 - Loading and error states handled properly

**Todo Details View**
 - Nested route for individual todo details 
 - Displays full task information
 - Navigation back to main list

**Search and Filtering**
- Search todos by title
- Filter todos by completion status:
    -  All
    -  Complete
    -  Incomplete

**Error Handling**
-  Custom Error Boundary implementation
-  Dedicated test route to trigger error boundary
-  Custom 404 page for undefined routes

**Responsive UI**
-  Mobile-first responsive layout
-  Accessible semantic HTML structure
-  Proper keyboard navigation support

## Bonus Features Implemented

**CRUD Operations**
-  Create new todos
-  Edit existing todos using modal interface
-  Delete todos with confirmation dialog
-  Instant UI updates after operations

**Authentication**
-   User registration and login
-   Access token and refresh token handling
-   Protected routes
-   User session persistence
-   Display logged-in user information

**Status Indicators**
-  Visual color indicators based on todo status
-  Improves usability and clarity


## Technology Stack

**Frontend Framework**
-   React 19+
-   Functional components and hooks
    
**Routing**
-   React Router DOM

**API Integration**
-   Axios
-   REST API integration with proper error handling

**State Management**
-   React hooks (useState, useEffect)
-   Local storage for authentication persistence

**Styling**
-   Tailwind CSS
-   Desktop-first responsive design
-   Consistent design system

**Deployment**
-   Netlify (choose one)


## API Reference

**Base URL:** 
[https://api.oluwasetemi.dev](https://api.oluwasetemi.dev)

**Documentation:**  
[https://api.oluwasetemi.dev/reference](https://api.oluwasetemi.dev/reference)

## Endpoints used:

**Authentication**
-   POST /auth/register
-   POST /auth/login
-   GET /auth/me
-   POST /auth/logout

**Todos**
-   GET /todos
-   GET /todos/{id}
-   POST /todos
-   PUT /todos/{id}
-   DELETE /todos/{id}


# Project Structure

   src/
│
├── components/
│   ├── TodoCard.jsx
│   ├── EditTodoModal.jsx
│   ├── ErrorBoundary.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── TodoDetails.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── NotFound.jsx
│
├── services/
│   ├── auth.js
│
├── App.jsx
├── main.jsx



## Installation and Setup
**Clone the repository**

    git clone https://github.com/your-username/todo-app.git

**Navigate into the project**

    cd todo-app

**Install dependencies**

    npm install

**Start development server**

    npm run dev

**Build for production**

    npm run build

**Preview production build**

    npm run preview


**Available Scripts**

 `npm run dev        	Starts development server`
`npm run build      	Builds project for production`
`npm run preview     	Preview production build locally`
`npm run lint					Runs ESLint`
 


# Accessibility Features

Semantic HTML elements used throughout the application
Proper form labels and input associations
Keyboard navigation supported
Accessible buttons and interactive elements
Proper color contrast compliance
Focus management in modals
Error messages readable by screen readers

## SEO Considerations
Dynamic document titles for each route
Proper HTML structure
Clean and semantic markup
Accessible navigation

----------

## Error Handling Strategy
Error Boundary component catches unexpected runtime errors
Graceful fallback UI shown to users
API errors handled and displayed clearly
Network failures handled properly

## Authentication Flow
User registers or logs in
Server returns:
-   accessToken
-   refreshToken
-   user object
    
Tokens stored securely in localStorage
Protected routes verify authentication
API requests include authorization headers


## Screenshots


## Challenges and Solutions
Challenge: Managing modal state for editing individual todos  
Solution: Used selected todo state instead of boolean modal state

Challenge: Keeping UI in sync after editing or deleting tasks  
Solution: Used optimistic UI updates with React state

Challenge: Handling authentication persistence  
Solution: Stored tokens and user object in localStorage and created helper functions

Challenge: Creating scalable component structure  
Solution: Separated pages, components, and services

## Known Issues
Refresh token auto-renewal not fully implemented

WebSocket real-time updates not implemented yet

Pagination can be further optimized using TanStack Query


## Future Improvements

Add WebSocket support for real-time update
Implement TanStack Query for caching and improved state management
Add user profile pgae
Improve accessibility with additional ARIA attributes
Add offline support and caching
Add unit and integration tests


## Deployment Instructions
**Build the project**
`npm run build`

Deploy the dist folder to:
-   Vercel  
    or
-   Netlify

Ensure environment variables are configured correctly if needed


## Author
Name: Mareola  
Role: Frontend Developer  
Tech Stack: React, Node.js, Tailwind CSS