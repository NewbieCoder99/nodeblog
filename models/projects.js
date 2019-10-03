'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define('Projects', {
    clientId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    images: DataTypes.TEXT
  }, {});
  Projects.associate = function(models) {
    // associations can be defined here
  };
  return Projects;
};