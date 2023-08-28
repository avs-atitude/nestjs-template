import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Exclude()
  @Column({ length: 255 })
  password: string;

  @Column({ default: false })
  status: boolean;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @Exclude()
  @Column({ type: 'datetime', nullable: true })
  deletedAt: Date;
}
