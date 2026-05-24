import { Injectable } from "@nestjs/common";
import {
  CreateTaskDto,
  GetTaskQueryDto,
  updateTaskDto,
} from "./task.dto";
import { TaskRepository } from "./task.repository";

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(dto: CreateTaskDto) {
    return this.taskRepository.createTask(dto);
  }

  async updateTask(id: string, dto: updateTaskDto) {
    return this.taskRepository.updateTask(id, dto);
  }

  async deleteTask(id: string) {
    return this.taskRepository.deleteTask(id);
  }

  async getTaskById(id: string) {
    return this.taskRepository.getUserById(id);
  }

  async getTaskList(dto: GetTaskQueryDto) {
    return this.taskRepository.getList(dto);
  }
}