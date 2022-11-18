const DataTypes = require("sequelize").DataTypes;
const _SequelizeMeta = require("./SequelizeMeta");
const _cinema_chains = require("./cinema_chains");
const _cinemas = require("./cinemas");
const _genres = require("./genres");
const _languages = require("./languages");
const _movie_genres = require("./movie_genres");
const _movie_subs = require("./movie_subs");
const _movies = require("./movies");
const _orders = require("./orders");
const _prices = require("./prices");
const _rates = require("./rates");
const _rooms = require("./rooms");
const _rules = require("./rules");
const _schedule_formats = require("./schedule_formats");
const _schedules = require("./schedules");
const _seat_types = require("./seat_types");
const _seats = require("./seats");
const _subtitles = require("./subtitles");
const _user_orders = require("./user_orders");
const _users = require("./users");

function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  const cinema_chains = _cinema_chains(sequelize, DataTypes);
  const cinemas = _cinemas(sequelize, DataTypes);
  const genres = _genres(sequelize, DataTypes);
  const languages = _languages(sequelize, DataTypes);
  const movie_genres = _movie_genres(sequelize, DataTypes);
  const movie_subs = _movie_subs(sequelize, DataTypes);
  const movies = _movies(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const prices = _prices(sequelize, DataTypes);
  const rates = _rates(sequelize, DataTypes);
  const rooms = _rooms(sequelize, DataTypes);
  const rules = _rules(sequelize, DataTypes);
  const schedule_formats = _schedule_formats(sequelize, DataTypes);
  const schedules = _schedules(sequelize, DataTypes);
  const seat_types = _seat_types(sequelize, DataTypes);
  const seats = _seats(sequelize, DataTypes);
  const subtitles = _subtitles(sequelize, DataTypes);
  const user_orders = _user_orders(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  genres.belongsToMany(movies, { as: 'movie_id_movies', through: movie_genres, foreignKey: "genre_id", otherKey: "movie_id" });
  movies.belongsToMany(genres, { as: 'genre_id_genres', through: movie_genres, foreignKey: "movie_id", otherKey: "genre_id" });
  movies.belongsToMany(subtitles, { as: 'sub_id_subtitles', through: movie_subs, foreignKey: "movie_id", otherKey: "sub_id" });
  orders.belongsToMany(users, { as: 'user_id_users', through: user_orders, foreignKey: "order_id", otherKey: "user_id" });
  schedule_formats.belongsToMany(seat_types, { as: 'type_id_seat_types', through: prices, foreignKey: "format_id", otherKey: "type_id" });
  seat_types.belongsToMany(schedule_formats, { as: 'format_id_schedule_formats', through: prices, foreignKey: "type_id", otherKey: "format_id" });
  subtitles.belongsToMany(movies, { as: 'movie_id_movies_movie_subs', through: movie_subs, foreignKey: "sub_id", otherKey: "movie_id" });
  users.belongsToMany(orders, { as: 'order_id_orders', through: user_orders, foreignKey: "user_id", otherKey: "order_id" });
  cinemas.belongsTo(cinema_chains, { as: "chain", foreignKey: "chain_id"});
  cinema_chains.hasMany(cinemas, { as: "cinemas", foreignKey: "chain_id"});
  rooms.belongsTo(cinemas, { as: "cinema", foreignKey: "cinema_id"});
  cinemas.hasMany(rooms, { as: "rooms", foreignKey: "cinema_id"});
  movie_genres.belongsTo(genres, { as: "genre", foreignKey: "genre_id"});
  genres.hasMany(movie_genres, { as: "movie_genres", foreignKey: "genre_id"});
  movies.belongsTo(languages, { as: "lang", foreignKey: "lang_id"});
  languages.hasMany(movies, { as: "movies", foreignKey: "lang_id"});
  movie_genres.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(movie_genres, { as: "movie_genres", foreignKey: "movie_id"});
  movie_subs.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(movie_subs, { as: "movie_subs", foreignKey: "movie_id"});
  schedules.belongsTo(movies, { as: "movie", foreignKey: "movie_id"});
  movies.hasMany(schedules, { as: "schedules", foreignKey: "movie_id"});
  user_orders.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(user_orders, { as: "user_orders", foreignKey: "order_id"});
  movies.belongsTo(rates, { as: "rate", foreignKey: "rate_id"});
  rates.hasMany(movies, { as: "movies", foreignKey: "rate_id"});
  schedules.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(schedules, { as: "schedules", foreignKey: "room_id"});
  seats.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(seats, { as: "seats", foreignKey: "room_id"});
  users.belongsTo(rules, { as: "rule", foreignKey: "rule_id"});
  rules.hasMany(users, { as: "users", foreignKey: "rule_id"});
  prices.belongsTo(schedule_formats, { as: "format", foreignKey: "format_id"});
  schedule_formats.hasMany(prices, { as: "prices", foreignKey: "format_id"});
  schedules.belongsTo(schedule_formats, { as: "format", foreignKey: "format_id"});
  schedule_formats.hasMany(schedules, { as: "schedules", foreignKey: "format_id"});
  orders.belongsTo(schedules, { as: "schedule", foreignKey: "schedule_id"});
  schedules.hasMany(orders, { as: "orders", foreignKey: "schedule_id"});
  prices.belongsTo(seat_types, { as: "type", foreignKey: "type_id"});
  seat_types.hasMany(prices, { as: "prices", foreignKey: "type_id"});
  seats.belongsTo(seat_types, { as: "type", foreignKey: "type_id"});
  seat_types.hasMany(seats, { as: "seats", foreignKey: "type_id"});
  movie_subs.belongsTo(subtitles, { as: "sub", foreignKey: "sub_id"});
  subtitles.hasMany(movie_subs, { as: "movie_subs", foreignKey: "sub_id"});
  user_orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_orders, { as: "user_orders", foreignKey: "user_id"});

  return {
    SequelizeMeta,
    cinema_chains,
    cinemas,
    genres,
    languages,
    movie_genres,
    movie_subs,
    movies,
    orders,
    prices,
    rates,
    rooms,
    rules,
    schedule_formats,
    schedules,
    seat_types,
    seats,
    subtitles,
    user_orders,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
