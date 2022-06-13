const Sequelize = require('sequelize');


const sequelize = new Sequelize('bsale_test','bsale_test','bsale_test',{
    dialect:'mysql',
    host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    define: {
        timestamps: false
    }
});


module.exports  = sequelize;

