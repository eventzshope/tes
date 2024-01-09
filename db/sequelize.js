const { DataTypes, Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((_) => "connexion reussir")
  .catch((error) => console.log("ERRUR DE CONNEXION "+error));



const initDb = () => {
  return sequelize.sync().then((_) => { }); 
}; 

module.exports = {
  initDb,
 
};