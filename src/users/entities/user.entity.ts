import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  username: string;

  @Column({ nullable: false, unique: true, length: 50 })
  email: string;

  @Column({ nullable: false, length: 50 })
  password: string;

  @Column({ default: '1' })
  isActive: boolean;

  @Column({ nullable: true, length: 50 })
  address: string;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  updatedAt: Date;
}
