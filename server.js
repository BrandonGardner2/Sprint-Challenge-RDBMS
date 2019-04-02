const express = require("express");
const helmet = require("helmet");
const ActionsRouter = require("./routes/actions-route");
const ProjectsRouter = require("./routes/projects-route");

const server = express();

//Middleware
server.use(express.json());
server.use(helmet());

//Routes Middleware
server.use("/api/actions", ActionsRouter);
server.use("/api/projects", ProjectsRouter);

module.exports = server;
