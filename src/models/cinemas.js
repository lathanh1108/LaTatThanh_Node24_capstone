const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cinemas.init(sequelize, DataTypes);
}

class cinemas extends Sequelize.Model {
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
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chain_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cinema_chains',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cinemas',
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
        name: "chain_id",
        using: "BTREE",
        fields: [
          { name: "chain_id" },
        ]
      },
    ]
  });
  }
}
