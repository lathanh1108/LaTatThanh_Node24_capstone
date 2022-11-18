'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const schedule_formats = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).schedule_formats

    await queryInterface.bulkInsert('schedule_formats', schedule_formats)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('schedule_formats', null, {})
  }
};
