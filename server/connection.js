const {Sequelize} = require("sequelize");
const {database,user,password,host} = require("./credidentials");

const connection = new Sequelize(database,user,password,{
    host,
    dialect:"mysql"
});

module.exports = connection;