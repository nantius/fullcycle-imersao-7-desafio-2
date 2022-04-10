import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database.provider';
import { transactionsProvider } from './transactions.providers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...transactionsProvider, ...databaseProviders],
})
export class AppModule {}
