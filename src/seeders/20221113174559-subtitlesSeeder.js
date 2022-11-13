'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const subtitles = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).subtitles

    await queryInterface.bulkInsert('subtitles', subtitles)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('subtitles', null, {})
  }
};
