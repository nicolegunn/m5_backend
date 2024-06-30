# Z Energy Prototype Website - Back End

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

This backend for the Z Energy prototype website is built with Node.js and Express. It uses MongoDB as its database and Mongoose to retrieve data.

## Features

- Handling requests from the frontend
- Connecting to the database and retrieving data
- Sending back relevant information to the frontend

## Usage

- To be used as a server/backend for the Z Energy Prototype Website which can be found here: [Service Station Website Frontend](https://github.com/nicolegunn/service-station-website-frontend.git).

## Technologies Used

This backend was created with the following technologies:

- [Node](https://nodejs.org/) - A JavaScript cross platform runtime environment.
- [Express](https://expressjs.com/) - A web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - A document-oriented NoSQL database used to store station data.
- [Mongoose](https://mongoosejs.com/) - An Object Data Modeling (ODM) library for MongoDB and Node.js to retrieve documents from the database.
- [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Prerequisites

![Node](https://img.shields.io/badge/Node.js-16.0.0-green?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-8.0.0-red?style=for-the-badge&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB installed locally with service station data  
  A tool to seed a local instance of MongoDB with service station data can be found here: [Service Station CLI Seed Tool](https://github.com/nicolegunn/cli-mongodb-seed-service-stations.git)

## Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/nicolegunn/service-station-website-backend.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd service-station-website-backend
   ```
3. **Create a .env file in the root directory and add your port number**:
   ```env
   PORT=4000
   ```
4. **Install dependencies**:
   ```sh
   npm install
   ```
5. **Run the application**:
   ```sh
   npm run dev
   ```

### **Nicole Gunn**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicole-gunn-a582ba23b/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nicolegunn)

### **Paolo Alejandro**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paolo-alejandro-2b0941126/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jpmal22)

### **Pouyan Iranpour**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pouyan-iranpour-b112a6b6/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pouyaniranpour)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
