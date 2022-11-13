'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const movies = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).movies

    await queryInterface.bulkInsert('movies', movies)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
