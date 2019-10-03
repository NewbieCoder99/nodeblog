'use strict';

var dateTime = require('node-datetime').create();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      name : 'Kartpay',
      slug : 'kartpay',
      logo : 'client-1.png',
      createdAt : dateTime.format('Y-m-d H:M:S'),
      updatedAt : dateTime.format('Y-m-d H:M:S')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
