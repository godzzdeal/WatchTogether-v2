import express from "express";
import cors from "cors";
import http from 'http';

const app = express();
const server = http.createServer(app);


// All constants in enviroment {./env}.
const PORT = process.env.PORT;

// Middlware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function run() {
    // await sequelize
    //   .authenticate()
    //   .then(() => {
    //     app.listen(PORT, () => {
    //       logging(0, "Connection has been established successfully.");
    //     });
    //     console.log("");
    //   })
    //   .catch((err) => {
    //     logging(0, `Error connect to Database ( ${err}) `);
    //   });
    // sequelize.sync();
    app.listen(PORT, () => {
              logging(0, "Connection has been established successfully.");
            });
  }
  
  run();