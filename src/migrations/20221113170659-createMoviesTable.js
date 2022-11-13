'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
      },
      trailer: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      director: {
        type: Sequelize.STRING,
      },
      cast: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      premiereDate: {
        type: Sequelize.DATE,
      },
      lang_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "languages",
          key: "id"
        }
      },
      rate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rates',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};