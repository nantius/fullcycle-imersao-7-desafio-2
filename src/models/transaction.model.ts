import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

@Table
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column
  type: TransactionType;

  @Column
  amount: string;
}
