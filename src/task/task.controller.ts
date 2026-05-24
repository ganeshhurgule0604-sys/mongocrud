import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

import {
  CreateTaskDto,
  GetTaskQueryDto,
  updateTaskDto,
} from "./task.dto";

import { TaskService } from "./task.service";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }

  @Patch(":id")
  async updateTask(
    @Param("id") id: string,
    @Body() dto: updateTaskDto
  ) {
    return this.taskService.updateTask(id, dto);
  }

  @Delete(":id")
  async deleteTask(@Param("id") id: string) {
    return this.taskService.deleteTask(id);
  }

  @Get(":id")
  async getTaskById(@Param("id") id: string) {
    return this.taskService.getTaskById(id);
  }

  @Get()
  async getTaskList(@Query() query: GetTaskQueryDto) {
    return this.taskService.getTaskList(query);
  }
}