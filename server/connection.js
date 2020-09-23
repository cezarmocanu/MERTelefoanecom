const {Sequelize,DataTypes} = require("sequelize");
const {database,user,password,host} = require("./credidentials");
const TelefonInitializer = require("./models/Telefon");

const connection = new Sequelize(database,user,password,{
    host,
    dialect:"mysql"
});

TelefonInitializer(connection,DataTypes);

//connection.sync({force:true});

module.exports = connection;