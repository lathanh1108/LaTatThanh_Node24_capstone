const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return schedules.init(sequelize, DataTypes);
}

class schedules extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    show_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    format_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'schedule_formats',
        key: 'id'
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rooms',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'schedules',
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
        name: "movie_id",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
      {
        name: "format_id",
        using: "BTREE",
        fields: [
          { name: "format_id" },
        ]
      },
      {
        name: "room_id",
        using: "BTREE",
        fields: [
          { name: "room_id" },
        ]
      },
    ]
  });
  }
}
