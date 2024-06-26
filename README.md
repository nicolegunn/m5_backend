# Z Energy Prototype website - Back End

This backend for the Z Energy prototype website is built with Node.js and Express. It uses MongoDB as its database and Mongoose to retrieve data.

## Built With

This project was bootstrapped with the following technologies:

- [Node](https://nodejs.org/) - A JavaScript cross platform runtime environment.
- [Express](https://expressjs.com/) - A web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - A document-oriented NoSQL database used to store station data.
- [Mongoose](https://mongoosejs.com/) - An Object Data Modeling (ODM) library for MongoDB and Node.js to retrieve documents from the database.
- [CORS](https://www.npmjs.com/package/cors) - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Prerequisites
-MongoDB local instance seeded with Z station data using the command line tool which can be found at this repository: https://github.com/nicolegunn/seed.git

## Installation

git clone https://github.com/your_username/m5_backend.git
cd m5_backend
npm install

## .ENV

Create a .env file and enter the following environment variables: 

PORT=4000

## Start

npm start

## Features

- Handling requests from the frontend
- Connecting to the database and retrieving data
- Sending back relevant information to the frontend

## Usage 

- To be used as a server/backend for the Z Energy Prototype Website.

## Authors 

Nicole Gunn - https://github.com/nicolegunn

Jose Paolo Alejandro - https://github.com/jpmal22

Pouyan Iranpour - https://github.com/pouyaniranpour




