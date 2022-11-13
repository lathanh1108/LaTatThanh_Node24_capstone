const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return rooms.init(sequelize, DataTypes);
}

class rooms extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cinema_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cinemas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'rooms',
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
        name: "cinema_id",
        using: "BTREE",
        fields: [
          { name: "cinema_id" },
        ]
      },
    ]
  });
  }
}
