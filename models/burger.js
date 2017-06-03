module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
      notEmpty: true
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return burger;
};