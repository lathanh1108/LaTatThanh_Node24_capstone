'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');
const dotenv = require('dotenv').config();

module.exports = {
  async up(queryInterface, Sequelize) {
    const rooms = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).rooms

    await queryInterface.bulkInsert('rooms', rooms)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rooms', null, {})
  }
};
