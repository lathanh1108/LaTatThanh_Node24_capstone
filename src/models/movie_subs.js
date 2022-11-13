const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return movie_subs.init(sequelize, DataTypes);
}

class movie_subs extends Sequelize.Model {
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
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subtitles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movie_subs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_id" },
          { name: "sub_id" },
        ]
      },
      {
        name: "sub_id",
        using: "BTREE",
        fields: [
          { name: "sub_id" },
        ]
      },
    ]
  });
  }
}
