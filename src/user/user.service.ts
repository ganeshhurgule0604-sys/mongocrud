import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { GetUserQueryDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo:UserRepository
  ){}
  create(createUserDto: CreateUserDto) {
    return this.userRepo.createUser(createUserDto);
  }

  findAll(dto:GetUserQueryDto) {
    return this.userRepo.getAllUsers(dto);
  }

  findOne(id: string) {
    return this.userRepo.getUserById(id);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ) {
    return this.userRepo.updateUser(
      id,
      updateUserDto,
    );
  }

  async remove(id: string) {
    return this.userRepo.deleteUser(id);
  }
}
