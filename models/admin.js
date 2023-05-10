module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Admin",
    {
      // Model attributes are defined here
      //   id: {
      //     type: DataTypes.STRING,
      //     allowNull: false
      //   },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  );

  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.Admin); // true
};
