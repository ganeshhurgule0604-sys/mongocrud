import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { GetUserQueryDto } from "./dto/user.dto";

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) { }

  async createUser(
    dto: CreateUserDto
  ) {
    return this.userModel.create(dto)
  }

  async updateUser(id: string,
    dto: UpdateUserDto
  ) {
    return this.userModel.findByIdAndUpdate(id,
      dto, {
      new: true
    }
    )
  }

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async getUserById(id: string) {
    return this.userModel.findById(id);
  }

  async getAllUsers(dto: GetUserQueryDto) {

    const {
      page = 1,
      limit = 10,
      name,
      email,
      age,
      ageGt,
      ageLt,
    } = dto;

    const filter: any = {};

    if (name) {
      filter.name = {
        $regex: name,
        $options: 'i'
      }
    }
    // age exact
    if (age) {
      filter.age = Number(age);
    }

    // age greater than
    if (ageGt) {
      filter.age = {
        ...filter.age,
        $gt: Number(ageGt),
      };
    }

    // age less than
    if (ageLt) {
      filter.age = {
        ...filter.age,
        $lt: Number(ageLt),
      };
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.userModel
        .find(filter)
        .skip(skip)
        .limit(Number(limit))
        .sort({
          createdAt: -1,
        }),

      this.userModel.countDocuments(filter),
    ]);

    return {
      data,
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    };
  }



}