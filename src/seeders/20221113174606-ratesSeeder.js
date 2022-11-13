'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const rates = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).rates

    await queryInterface.bulkInsert('rates', rates)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rates', null, {})
  }
};
