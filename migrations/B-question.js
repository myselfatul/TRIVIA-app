'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('question', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },

      a:{
        type: Sequelize.STRING
      },

      b:{
        type: Sequelize.STRING
      },

      c:{
        type: Sequelize.STRING
      },
      
      d:{
        type: Sequelize.STRING
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true,
      underscored:true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('question');
  }
};