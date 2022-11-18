const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user_orders.init(sequelize, DataTypes);
}

class user_orders extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_orders',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "order_id" },
        ]
      },
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
  }
}
