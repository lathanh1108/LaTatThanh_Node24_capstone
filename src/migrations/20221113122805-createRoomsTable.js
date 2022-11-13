'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cinema_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cinemas',
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
    await queryInterface.dropTable('rooms');
  }
};
