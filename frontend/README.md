### Frontend Documentation

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Project Setup](#project-setup)
- [Features](#features)
- [Folder Structure](#folder-structure)

## About

This is the **frontend** part of the project, responsible for the user interface and interactions. The application is built using modern web technologies and is designed to be fast, responsive, and user-friendly.

## Technologies

The frontend is developed with the following technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Sass](https://sass-lang.com/) - CSS preprocessor for better styling management.
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management library.
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) - For type checking in React components.
- [Vite](https://vitejs.dev/) - Fast development build tool.

## Project Setup

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ssidikov/Argent-Bank.git
   cd frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Development

To run the application in development mode:

```bash
yarn dev
# or
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Production Build

To create an optimized production build:

```bash
yarn build
# or
npm run build
```

To preview the production build locally:

```bash
yarn preview
# or
npm run preview
```

## Features

- **Authentication**: User sign-in functionality with input validation.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Reusable Components**: Modular and reusable React components.
- **State Management**: Centralized state management using Redux Toolkit.
- **Dynamic Routing**: Implemented with React Router for seamless navigation.

## Folder Structure

```plaintext
src/
├── assets/          # Images, icons, and static files
├── components/      # Reusable components
├── pages/           # Application pages
├── styles/          # Sass stylesheets
├── app/             # App, Redux slices and store setup
├── App.jsx          # Main application component
├── main.jsx        # Entry point
```
