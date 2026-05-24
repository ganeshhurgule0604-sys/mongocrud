import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum TaskType {
  CALL = 'call',
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  OTHER = 'other',
}

export enum TaskStatus {
  TODO = 'todo',
  PENDING = 'pending',
  PROGRESS = 'progress',
  COMPLETED = 'completed',
}

export class CreateTaskDto {
  @IsEnum(TaskType)
  @IsNotEmpty()
  taskType!: TaskType;

  @IsDateString()
  dueDate!: Date;

  @IsMongoId()
  assignee!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  status!: TaskStatus;
}

export class updateTaskDto extends  PartialType(CreateTaskDto){}



export class GetTaskQueryDto {
  page?: number;
  limit?: number;

  taskType?: string;

  status?: number;
  dueDate?: number;
}