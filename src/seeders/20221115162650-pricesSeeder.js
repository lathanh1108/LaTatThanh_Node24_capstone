'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const prices = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).prices

    await queryInterface.bulkInsert('prices', prices)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('prices', null, {})
  }
};
