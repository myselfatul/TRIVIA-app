'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('question', [{
       question:'Who is the best cricketer in the world?',
       a:'A) Sachin Tendulkar',
       b:'B) Virat Kohli',
       c:'C) Adam Gilchirst',
       d:'D) Jacques Kallis',
       created_at: new Date(),
       updated_at: new Date()
     },
    {
      question:'What are the colors in the Indian national flag? Select all:',
      a:'A) WHITE',
      b:'B) YELLOW',
      c:'C) ORANGE',
      d:'D) GREEN',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('question', null, {});
  }
};
