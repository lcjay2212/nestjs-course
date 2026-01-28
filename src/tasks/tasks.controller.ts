import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
    console.log(tasksService, 'TasksController constructor');
  }

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
