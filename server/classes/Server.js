/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5ce1adcf63897a72058db532
*
* You will get 10% discount for each one of your friends
* 
*/
// Express
import express from "express";
import http from "http";
import bodyParser from "body-parser";

// Swagger
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";

// Logging
import Logger from "./Logger";

// Properties
import properties from "../properties.js";

// Security
import cors from "cors";
import helmet from "helmet";

// Controllers
import SecurityController from "../controllers/SecurityController";

// Start Import Controllers

// Database
import Database_Estore_db from "./Database_Estore_db.js";

// Controllers
import CategoryController from "../controllers/Estore_db/CategoryController";
import CouponController from "../controllers/Estore_db/CouponController";
import OrderController from "../controllers/Estore_db/OrderController";
import ProductController from "../controllers/Estore_db/ProductController";
import UserController from "../controllers/Estore_db/UserController";

// End Import Controllers


class Server {
  constructor() {
    this.app = express();
  }

  /**
   * Start the server
   * @returns {Promise<void>}
   */
  async init() {
    Logger.info(
      "\r\n\r\n-----------------------------------\r\n\r\nStarting MyCRM \r\nGenerated by\r\n\r\n   _____ _          __  __      _     _           \r\n  / ____| |        / _|/ _|    | |   | |          \r\n | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __ \r\n  \\___ \\| |/ / _` |  _|  _/ _ \\| |/ _` |/ _ \\ '__|\r\n  ____) |   < (_| | | | || (_) | | (_| |  __/ |   \r\n |_____/|_|\\_\\__,_|_| |_| \\___/|_|\\__,_|\\___|_|   \r\n\r\nFor more documentation please visit https://skaffolder.com/#/documentation\r\n\r\n-----------------------------------\r\n\r\n"
    );

    // Start Init Database
		Database_Estore_db.init();
 // End Init Database

    // Add parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(Logger.expressMiddleware);

    // Securitiy
    this.app.use(helmet());
    this.app.use(cors());

    // Swagger
    const swaggerDocument = yaml.load("./swagger.yaml");
    this.app.use(
      "/api/docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    // Start App Server
    const server = http.Server(this.app);
    this.app.use(express.static(properties.publicPath));

    await server.listen(properties.port);
    Logger.info("Server started on port " + properties.port);
    Logger.info(
      "Swagger docs at http://localhost:" + properties.port + "/api/docs"
    );

    // Import controllers
    const router = express.Router();
    SecurityController.init(router);

    // Start Init Controllers
		CategoryController.init(router);
		CouponController.init(router);
		OrderController.init(router);
		ProductController.init(router);
		UserController.init(router);
		 // End Init Controllers

    this.app.use("/", router);
  }
}

export default new Server();
