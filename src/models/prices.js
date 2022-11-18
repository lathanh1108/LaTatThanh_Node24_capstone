const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return prices.init(sequelize, DataTypes);
}

class prices extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    format_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'schedule_formats',
        key: 'id'
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seat_types',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prices',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "format_id" },
          { name: "type_id" },
        ]
      },
      {
        name: "type_id",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
  }
}
