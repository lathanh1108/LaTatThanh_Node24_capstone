'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');
const dotenv = require('dotenv').config();

module.exports = {
  async up(queryInterface, Sequelize) {
    const seat_types = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).seat_types

    await queryInterface.bulkInsert('seat_types', seat_types)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('seat_types', null, {})
  }
};
