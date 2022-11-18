'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const rules = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).rules

    await queryInterface.bulkInsert('rules', rules)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rules', null, {})
  }
};
