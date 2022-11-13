'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const movie_subs = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).movie_subs

    await queryInterface.bulkInsert('movie_subs', movie_subs)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movie_subs', null, {})
  }
};
