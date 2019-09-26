'use strict';
module.exports = (sequelize, DataTypes) => {

    const Articles = sequelize.define('Articles', {
        userId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        content: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {});

    Articles.associate = function(models) {
        // Articles.hasOne(models.Categories);
    };

    return Articles;
};