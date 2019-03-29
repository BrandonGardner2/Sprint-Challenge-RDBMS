const express = require("express");
const helmet = require("helmet");

const server = express();

//Middleware
server.use(express.json());
server.use(helmet());

//Routes Middleware

module.exports = server;
