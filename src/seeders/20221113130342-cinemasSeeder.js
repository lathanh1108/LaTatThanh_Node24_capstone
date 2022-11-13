'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');
const dotenv = require('dotenv').config();

module.exports = {
  async up(queryInterface, Sequelize) {
    const cinemas = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).cinemas

    await queryInterface.bulkInsert('cinemas', cinemas)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cinemas', null, {})
  }
};
