const DataTypes = require("sequelize").DataTypes;
const _SequelizeMeta = require("./SequelizeMeta");
const _cinema_chains = require("./cinema_chains");
const _cinemas = require("./cinemas");
const _rooms = require("./rooms");
const _seat_types = require("./seat_types");
const _seats = require("./seats");

function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  const cinema_chains = _cinema_chains(sequelize, DataTypes);
  const cinemas = _cinemas(sequelize, DataTypes);
  const rooms = _rooms(sequelize, DataTypes);
  const seat_types = _seat_types(sequelize, DataTypes);
  const seats = _seats(sequelize, DataTypes);

  cinemas.belongsTo(cinema_chains, { as: "chain", foreignKey: "chain_id"});
  cinema_chains.hasMany(cinemas, { as: "cinemas", foreignKey: "chain_id"});
  rooms.belongsTo(cinemas, { as: "cinema", foreignKey: "cinema_id"});
  cinemas.hasMany(rooms, { as: "rooms", foreignKey: "cinema_id"});
  seats.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(seats, { as: "seats", foreignKey: "room_id"});
  seats.belongsTo(seat_types, { as: "type", foreignKey: "type_id"});
  seat_types.hasMany(seats, { as: "seats", foreignKey: "type_id"});

  return {
    SequelizeMeta,
    cinema_chains,
    cinemas,
    rooms,
    seat_types,
    seats,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
