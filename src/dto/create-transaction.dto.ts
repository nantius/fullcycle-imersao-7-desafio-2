import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { TransactionType } from 'src/models/transaction.model';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType;

  @IsNotEmpty()
  @Min(0.01)
  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;
}
