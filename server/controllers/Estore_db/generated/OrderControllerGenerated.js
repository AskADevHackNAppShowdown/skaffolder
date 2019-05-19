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
import Properties from "../../../properties";
import OrderModel from "../../../models/Estore_db/OrderModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/cart`;
    router.post(baseUrl + "", authorize([]), generatedControllers.create);
    router.delete(baseUrl + "/:id", authorize([]), generatedControllers.delete);
    router.get(
      baseUrl + "/findBy_coupon/:key",
      authorize([]),
      generatedControllers.findBy_coupon
    );
    router.get(
      baseUrl + "/findBy_products/:key",
      authorize([]),
      generatedControllers.findBy_products
    );
    router.get(baseUrl + "/:id", authorize([]), generatedControllers.get);
    router.get(baseUrl + "", authorize([]), generatedControllers.list);
    router.post(baseUrl + "/:id", authorize([]), generatedControllers.update);
  },

  // CRUD METHODS

  /**
   * OrderModel.create
   *   @description CRUD ACTION create
   *
   */
  create: async (req, res) => {
    try {
      const result = await OrderModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
   * OrderModel.delete
   *   @description CRUD ACTION delete
   *   @param ObjectId id Id
   *
   */
  delete: async (req, res) => {
    try {
      const result = await OrderModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
   * OrderModel.findBy_coupon
   *   @description CRUD ACTION findBy_coupon
   *   @param Objectid key Id della risorsa _coupon da cercare
   *
   */
  findBy_coupon: async (req, res) => {
    try {
      const result = await OrderModel.findBy_coupon(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
   * OrderModel.findBy_products
   *   @description CRUD ACTION findBy_products
   *   @param Objectid key Id della risorsa _products da cercare
   *
   */
  findBy_products: async (req, res) => {
    try {
      const result = await OrderModel.findBy_products(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
   * OrderModel.get
   *   @description CRUD ACTION get
   *   @param ObjectId id Id
   *
   */
  get: async (req, res) => {
    try {
      const result = await OrderModel.getPopulate(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
   * OrderModel.list
   *   @description CRUD ACTION list
   *
   */
  list: async (req, res) => {
    try {
      const result = await OrderModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

  /**
   * OrderModel.update
   *   @description CRUD ACTION update
   *   @param ObjectId id Id
   *
   */
  update: async (req, res) => {
    try {
      const result = await OrderModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  }

  // Custom APIs
};

export default generatedControllers;
