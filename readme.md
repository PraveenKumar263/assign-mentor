# Mentor-Student Management System

The Mentor-Student Management System is a backend application that facilitates the management of mentors and students in an educational institution.

## Setup

1. **Clone the repository**:
    ```bash
    git clone git@github.com:PraveenKumar263/assign-mentor.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd mentor-student-management
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Create a `.env` file** in the project root and add your MongoDB connection string and port number:
    ```env
    MONGODB_URI=<your-mongodb-connection-string>
    PORT=<desired-port-number>
    ```
5. **Start the server**:
    ```bash
    npm start
    ```
6. **Access the application** at `http://localhost:<port>`, where `<port>` is the port number defined in your application (default is typically 3001).

## API Endpoints

Explore the API documentation using the [Postman API Documentation](https://documenter.getpostman.com/view/37599009/2sAXjM3BEF).

### Features

- **Creating Mentor**: Add a new mentor to the system.
- **Listing Mentors**: Retrieve a list of all mentors, without students/
- **Assigning Students to Mentors**: Assign multiple students to a mentor.
- **Listing Students by Mentor**: Get a list of students assigned to a specific mentor.
- **Creating Student**: Add a new student to the system.
- **Listing Students**: Retrieve a list of all students.
- **Assigning Mentor to Student**: Assign a specific mentor to a student.
- **Fetching Assigned Mentor for a Student**: Retrieve the mentor currently assigned to a student.
- **Deleting a Mentor**: Delete a Mentor by Id
- **Deleting a Student**: Delete a Student by Id

## Project Structure

- **`index.js`**: Entry point for the application. Connects to MongoDB and starts the server.
- **`app.js`**: Contains the core configuration for the Express application, including middleware and route handling.
- **`models`**: Contains Mongoose schemas and models for Mentor and Student.
- **`controllers`**: Contains implementations of API endpoints.
- **`routes`**: Contains the routes and their corresponding controllers.
- **`utils`**: Contains configuration files and utility functions.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database used for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: Module to load environment variables from a `.env` file.

## Contributing

If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the ISC License.
