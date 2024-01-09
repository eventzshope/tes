const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize("bql3rhfld479jnsds3kj", "uiaamrqiqazzm6hs", "bql3rhfld479jnsds3kj", {
  host: "bql3rhfld479jnsds3kj-mysql.services.clever-cloud.com",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then((_) => "connexion reussir")
  .catch((error) => console.log(error));



const initDb = () => {
  return sequelize.sync().then((_) => { }); 
}; 

module.exports = {
  initDb,
 
};