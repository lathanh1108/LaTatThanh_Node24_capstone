const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return movie_genres.init(sequelize, DataTypes);
}

class movie_genres extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'genres',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movie_genres',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_id" },
          { name: "genre_id" },
        ]
      },
      {
        name: "genre_id",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
    ]
  });
  }
}
