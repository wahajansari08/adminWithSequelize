const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("e_comm", "wahaj", "0909", {
  host: "localhost",
  // logging: "true",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin")(sequelize, DataTypes, Model);

db.sequelize.sync({ force: true });
module.exports = db;
