const DataTypes = require("sequelize").DataTypes;
const _SequelizeMeta = require("./SequelizeMeta");
const _cinema_chains = require("./cinema_chains");
const _cinemas = require("./cinemas");
const _genres = require("./genres");
const _languages = require("./languages");
const _movie_genres = require("./movie_genres");
const _movie_subs = require("./movie_subs");
const _movies = require("./movies");
const _rates = require("./rates");
const _rooms = require("./rooms");
const _seat_types = require("./seat_types");
const _seats = require("./seats");
const _subtitles = require("./subtitles");

function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  const cinema_chains = _cinema_chains(sequelize, DataTypes);
  const cinemas = _cinemas(sequelize, DataTypes);
  const genres = _genres(sequelize, DataTypes);
  const languages = _languages(sequelize, DataTypes);
  const movie_genres = _movie_genres(sequelize, DataTypes);
  const movie_subs = _movie_subs(sequelize, DataTypes);
  const movies = _movies(sequelize, DataTypes);
  const rates = _rates(sequelize, DataTypes);
  const rooms = _rooms(sequelize, DataTypes);
  const seat_types = _seat_types(sequelize, DataTypes);
  const seats = _seats(sequelize, DataTypes);
  const subtitles = _subtitles(sequelize, DataTypes);

  genres.belongsToMany(movies, { as: 'movie_id_movies', through: movie_genres, foreignKey: "genre_id", otherKey: "movie_id" });
  movies.belongsToMany(genres, { as: 'genre_id_genres', through: movie_genres, foreignKey: "movie_id", otherKey: "genre_id" });
  movies.belongsToMany(subtitles, { as: 'sub_id_subtitles', through: movie_subs, foreignKey: "movie_id", otherKey: "sub_id" });
  subtitles.belongsToMany(movies, { as: 'movie_id_movies_movie_subs', through: movie_subs, foreignKey: "sub_id", otherKey: "movie_id" });
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
  movies.belongsTo(rates, { as: "rate", foreignKey: "rate_id"});
  rates.hasMany(movies, { as: "movies", foreignKey: "rate_id"});
  seats.belongsTo(rooms, { as: "room", foreignKey: "room_id"});
  rooms.hasMany(seats, { as: "seats", foreignKey: "room_id"});
  seats.belongsTo(seat_types, { as: "type", foreignKey: "type_id"});
  seat_types.hasMany(seats, { as: "seats", foreignKey: "type_id"});
  movie_subs.belongsTo(subtitles, { as: "sub", foreignKey: "sub_id"});
  subtitles.hasMany(movie_subs, { as: "movie_subs", foreignKey: "sub_id"});

  return {
    SequelizeMeta,
    cinema_chains,
    cinemas,
    genres,
    languages,
    movie_genres,
    movie_subs,
    movies,
    rates,
    rooms,
    seat_types,
    seats,
    subtitles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
