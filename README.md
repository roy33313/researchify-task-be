# Researchify BE

## Overview

The Researchify BE is a task management tool designed to help users efficiently manage their projects and tasks. Built with Node.js and MongoDB, this application allows users to create, update, and track tasks within specific projects, providing an intuitive and organized approach to task management.

### Features

- **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
- **Project Management:** Create and manage projects, each of which can contain multiple tasks.
- **Task Management:** Create, update, and delete tasks. Track tasks with statuses such as `pending`, `in-progress`, `completed`, `postponed`, and `cancelled`.
- **Filtering and Sorting:** Retrieve tasks by status and sort them by recency.
- **Associations:** Each task is associated with a project, and each project is linked to a user.

### Technology Stack

- **Backend:** Node.js with Express.js
- **Database:** MongoDB using Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Logging:** Winston

### Architecture

The application follows a layered architecture pattern, consisting of the following components:

- **Controllers:** Handle HTTP requests and responses, and interact with the service layer.
- **Services:** Contain the business logic and interact with the repository layer.
- **Repositories:** Interface with the database, performing CRUD operations.
- **Models:** Define the schema and structure for MongoDB collections.
- **Middlewares:** Include authentication and error-handling logic.
- **Utils:** Provide utility functions such as logging configuration.

### Getting Started

To get started with the Todo Application, follow the setup instructions in below:

- npm install
- npm run dev

Run these commands to start up the app in dev mode.

### Contributing

Contributions are welcome! If you would like to contribute to the project, please fork the repository and submit a pull request with your changes. For bug reports or feature requests, open an issue on GitHub.
