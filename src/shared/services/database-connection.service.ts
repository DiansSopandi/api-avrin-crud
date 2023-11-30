import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: 'root', //process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'avrin', // process.env.DATABASE_DB,
      multipleStatements: true,
      synchronize: true,
      dropSchema: false,
      logging: true,
      // entities: [User],
      entities: ['dist/**/*.entity.js'],
    };
  }
}
