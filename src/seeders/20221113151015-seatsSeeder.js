'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');
const dotenv = require('dotenv').config();

const rows = [
  { title: "A", type: 1 },
  { title: "B", type: 1 },
  { title: "C", type: 1 },
  { title: "D", type: 1 },
  { title: "E", type: 1 },
  { title: "F", type: 2 },
  { title: "G", type: 2 },
  { title: "H", type: 2 },
  { title: "I", type: 2 },
  { title: "J", type: 1 },
  { title: "K", type: 1 },
  { title: "L", type: 1 }
];
const seatQuantity = 20;

const generateSeat = async () => {
  const rooms = JSON.parse(await fs.readFileSync(process.env.DUMMY_DATA)).rooms;
  const result = []

  return new Promise((resolve, reject) => {
    rooms.forEach((room, r_index) => {
      rows.forEach(row => {
        for (let i = 1; i <= seatQuantity; i++) {
          let seat = {
            title: row.title + i,
            room_id: r_index + 1,
            type_id: row.type
          }

          result.push(seat);
        }
      });
    });
    resolve(result);
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const seats = await generateSeat();

    if (seats) {
      await queryInterface.bulkInsert('seats', seats);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('seats', null, {})
  }
};
