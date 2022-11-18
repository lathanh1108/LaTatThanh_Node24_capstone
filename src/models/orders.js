const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return orders.init(sequelize, DataTypes);
}

class orders extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'schedules',
        key: 'id'
      }
    },
    seats: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
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
        name: "schedule_id",
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
        ]
      },
    ]
  });
  }
}
