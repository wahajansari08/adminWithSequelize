const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("e_comm", "wahaj", "0909", {
  host: "localhost",
  dialect:
    "mysql" /* one of  | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
