const express=require('express');
const sequelize=require('../Test3/Config/config');
const userRoutes=require('../Test3/router/routes');
const app=express();
app.use(express.json());
app.use('/api',userRoutes);
sequelize.sync()
.then(()=>{
    port=process.env.PORT
    app.listen(PORT=> {
        console.log(`Server os running at ${PORT}`);
    })
});
.catch(error=>{
    console.log('Database is not connected',error);
});


