import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './models/transaction.model';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTIONS_REPOSITORY')
    private transactionsRepository: typeof Transaction,
  ) {}

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }

  postTransaction(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const { type, amount } = createTransactionDto;
    return this.transactionsRepository.create({
      type,
      amount,
    });
  }
}
