import { Sequelize } from 'sequelize-typescript';
import { Transaction } from './models/transaction.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: '../database.sqlite',
      });
      sequelize.addModels([Transaction]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
