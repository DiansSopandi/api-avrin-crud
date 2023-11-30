import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const createdAt = new Date().toISOString(),
        updatedAt = createdAt;
      const user = this.usersRepository.create({
        ...createUserDto,
        createdAt,
        updatedAt,
      });

      return await this.usersRepository
        .save(user)
        .then((result) => ({ status: HttpStatus.OK, result }));
    } catch (error) {
      throw new HttpException(
        {
          stausCode: HttpStatus.BAD_REQUEST,
          message: 'Create user failed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return await this.usersRepository
      .find()
      .then((result) => ({ status: HttpStatus.OK, result }));
  }

  async findOne(id: number) {
    return await this.usersRepository
      .findOne({
        select: [
          'username',
          'email',
          'address',
          'isActive',
          'createdAt',
          'updatedAt',
        ],
        where: [{ id }],
      })
      .then((result) => ({ status: HttpStatus.OK, result }));
  }

  async findByEmail(email: string) {
    return await this.usersRepository
      .findOne({
        where: {
          email,
        },
      })
      .then((result) => ({ status: HttpStatus.OK, result }));
  }

  async update(id: number, updateUserDto: Partial<UpdateUserDto>) {
    await this.usersRepository.update(
      { id },
      { ...updateUserDto, updatedAt: new Date().toISOString() },
    );
    return await this.usersRepository
      .findOne({ where: [{ id }] })
      .then((result) => ({ status: HttpStatus.OK, result }));
  }

  async remove(id: number) {
    await this.usersRepository.delete({ id });
    return { status: HttpStatus.OK, deleted: true };
  }
}
