const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return movies.init(sequelize, DataTypes);
}

class movies extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trailer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poster: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    director: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cast: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    premiereDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      }
    },
    rate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rates',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movies',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "lang_id",
        using: "BTREE",
        fields: [
          { name: "lang_id" },
        ]
      },
      {
        name: "rate_id",
        using: "BTREE",
        fields: [
          { name: "rate_id" },
        ]
      },
    ]
  });
  }
}
