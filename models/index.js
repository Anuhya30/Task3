const Sequelize=require('sequelize');
const sequelize=require('../Config/config.js');
const User=require('/user')(sequelize,Sequelize.DataTypes);
module.export={
    User,
    sequelize,
}