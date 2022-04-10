import { Transaction } from './models/transaction.model';

export const transactionsProvider = [
  {
    provide: 'TRANSACTIONS_REPOSITORY',
    useValue: Transaction,
  },
];
