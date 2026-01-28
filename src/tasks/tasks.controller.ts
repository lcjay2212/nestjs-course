import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
    console.log(tasksService, 'TasksController constructor');
  }

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') descrription: string,
  ): Task {
    return this.tasksService.createTask(title, descrription);
  }
}
