'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');
const dotenv = require('dotenv').config();

module.exports = {
  async up(queryInterface, Sequelize) {
    const chains = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).cinema_chains;

    await queryInterface.bulkInsert('cinema_chains', chains)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cinema_chains', null, {})
  }
};
