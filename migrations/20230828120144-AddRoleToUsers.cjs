"use strict";

/** @type {import('sequelize').Sequelize } */
const Sequelize = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn("users", "role", {
      type: Sequelize.STRING,
      defaultValue: "user",
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users", "role");
  },
};
