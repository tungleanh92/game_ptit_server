import { Sequelize } from "sequelize-typescript";
module.exports = new Sequelize('game_ptit','root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
});