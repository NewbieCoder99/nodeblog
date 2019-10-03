'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {});
  Clients.associate = function(models) {
    // associations can be defined here
  };
  return Clients;
};