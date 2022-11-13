'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const movie_genres = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).movie_genres

    await queryInterface.bulkInsert('movie_genres', movie_genres)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movie_genres', null, {})
  }
};
