import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./task.schema";
import { Model, model } from "mongoose";
import { CreateTaskDto, GetTaskQueryDto, updateTaskDto } from "./task.dto";

export class TaskRepository{
    constructor(
        @InjectModel(Task.name)
        private readonly taskRepo:Model<Task>
    ){}

    async createTask(dto:CreateTaskDto){
        return this.taskRepo.create(dto)
    }

    async updateTask(id ,dto:updateTaskDto){
        return  this.taskRepo.findByIdAndUpdate(id ,dto,{
            new:true
        })    
    }

  async deleteTask(id: string) {
    return this.taskRepo.findByIdAndDelete(id);
  }

  async getUserById(id: string) {
    return this.taskRepo.findById(id);
  }

  async getList(dto:GetTaskQueryDto){
    const {taskType ,dueDate,status,page ,limit} = dto;

    const filter :any ={}

    if(taskType){
      filter.taskType =taskType
    }

    if(status){
      filter.status=status
    }
    if(dueDate){
      filter.dueDate=dueDate
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [data, count] = await Promise.all([
      this.taskRepo
        .find(filter)
        .limit(Number(limit))
        .skip(skip),

      this.taskRepo.countDocuments(filter),
    ]);

    return {
      data,
      total: count,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(count / Number(limit)),
    };

}}