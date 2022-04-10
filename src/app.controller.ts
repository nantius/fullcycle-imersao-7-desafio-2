import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './models/transaction.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('transactions')
  getTransactions(): Promise<Transaction[]> {
    return this.appService.findAll();
  }

  @Post('transactions')
  postTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    return this.appService.postTransaction(createTransactionDto);
  }
}
