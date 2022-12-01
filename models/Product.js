const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
   },
   category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id'
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    defaultValue: 10,
    validate: {
      isNumeric: true
    }
  },
   price: {
     type: DataTypes.DECIMAL, 
     allowNull: false,
     validate: {
       isDecimal: true
     }
   }
 },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
