'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const genres = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).genres

    await queryInterface.bulkInsert('genres', genres)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', null, {})
  }
};
