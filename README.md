# Issue Tracker
This project is a Node.js application designed to serve as a basic web server with MongoDB integration. It provides functionality for handling routes related to projects.

### Setup Instructions:
- Clone the repository to your local machine.
- Make sure you have Node.js and MongoDB installed.
- Install project dependencies by running npm install.
- Create a .env file in the root directory and configure environment variables like MONGO_URI.
- Start the server by running npm start.

### Project Structure:
- config/mongoDB.js: Module to connect to MongoDB.
- index.js: Main entry point of the application.
- src/routes/routes.js: Contains route definitions.
- src/views/404.ejs: EJS template for handling 404 errors.
- public/: Directory for serving static files.

### Dependencies:
- **dotenv:** For loading environment variables from a .env file.
- **express:** Web framework for Node.js.
- **express-ejs-layouts:** Layout support for EJS templates.
- **mongoose:** MongoDB object modeling tool.

### How to Use:
**Start the server.**
```
node ./server.js
```
Access the application through the specified port (default is 3001).

Navigate to different routes defined in the project.

Ensure the correct MongoDB URI is provided in the .env file for a successful database connection.


### Contact Information:
For any inquiries or issues, please contact rishavjaiswal02@gmail.com

**Rishav Jaiswal - IssueTracker - 2024**
