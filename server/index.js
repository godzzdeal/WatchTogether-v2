// * All imports
import express from "express";
import cors from "cors";
import http from "http";
import logging from "./utils/logging.js";
import { Server } from "socket.io";
import sequelize from "./config/database.js";
import { randomUUID  } from "crypto";

// * Dynamic build orm tables.
const modelsPath = "./models/models.js";

if (process.env.REBUILD_ORM == 1) {
  import(modelsPath)
    .then((models) => {
      const cmodels = models.default;
    })
    .catch((err) => logging(0, "Ошибка сборки ORM."));
}

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  /* options */
});

// All constants in enviroment {./env}.
const PORT = process.env.PORT;

// Middlware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(randomUUID());

async function run() {
  await sequelize
    .authenticate()
    .then(() => {
      app.listen(PORT, () => {
        logging(0, "Connection has been established successfully.");
      });
      console.log("");
    })
    .catch((err) => {
      logging(0, `Error connect to Database ( ${err}) `);
    });
  sequelize.sync();
}

run();

io.on("connection", (socket) => {
  console.log("Socket connection ->");
  socket.on("joinRoom", (data, callback) => {});
});
