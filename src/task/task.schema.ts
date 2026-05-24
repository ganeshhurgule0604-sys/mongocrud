import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { TaskType, TaskStatus } from "./task.dto";

export type TaskDocument = HydratedDocument<Task>

export class Task {
    @Prop({
        type: String,
        enum: TaskType,
        required: true,
    })
    taskType!: TaskType;

    @Prop({
        required: true,
    })
    dueDate!: Date;

    @Prop({
        type: Types.ObjectId,
        ref: 'User',
        required: true
    })
    assignee!: Types.ObjectId

    @Prop()
    description?: string;

    @Prop({
        type: String,
        enum: TaskStatus,
        default: TaskStatus.PENDING
    })
    status?: TaskStatus

}


export const taskSchema = SchemaFactory.createForClass(Task);