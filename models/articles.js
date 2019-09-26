'use strict';
module.exports = (sequelize, DataTypes) => {

    const Articles = sequelize.define('Articles', {
        userId : DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        content: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {});

    Articles.associate = function(models) {

        /*
        * Many To One
        */
        Articles.belongsTo(models.Categories);
        Articles.belongsTo(models.User);

        /*
        * One To Many
        */

        /*
        * One To One
        */

        /*
        * Many To Many
        */
    };

    return Articles;

};