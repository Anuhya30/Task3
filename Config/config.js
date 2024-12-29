require('dotenv').config();
const {Sequelize}= require('sequelize');
const sequelize=new Sequelize(
    process.env.DATABASE_USER,
    process.env.DATABASE_NAME,
    {
        host:DATABASE_HOST,
        dialect:DATABASE_DIALECT,
    }
);
sequelize.authenticate()
.then(()=>{
    console.log('Database connected');
});
.catch(err => {
    console.log('Error message',err);
});
module.export=sequelize;
