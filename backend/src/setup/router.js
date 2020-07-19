const Router = require("express").Router;

const createPolls = require("../handlers/create-polls");

const createPollsValidator = require("../validators/create-polls-validator");

module.exports = (app, db) => {
  const router = new Router();

  router.post("/polls", createPollsValidator, createPolls(db));

  app.use(router);
};
