'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const languages = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).languages

    await queryInterface.bulkInsert('languages', languages)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('languages', null, {})
  }
};
