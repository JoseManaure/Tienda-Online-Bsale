const Sequelize = require ('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true
  },
  name:Sequelize.STRING,
  url_image:{
    type: Sequelize.STRING,
    allowNull: false
  },
  price:{
    type:Sequelize.FLOAT,
    allowNull:false
  },
  discount:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  category:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
},
  {
    freezeTableName: true,
});


module.exports = Product;