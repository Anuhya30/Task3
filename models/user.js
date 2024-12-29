const Sequelize=(sequelize,DataTypes)=>{
    const user=sequelize.define('./user',{
        id:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoIncrement:true,
        }
        name:{
            type:DataTypes.STRING,
            autoNull:false,
        }
        age:{
            type:DataTypes.INTEGER,

        }
        contact:{
            type:DataTypes.STRING,
            unique:true,
        }
});
    return User;
}