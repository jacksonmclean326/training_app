import { deleteTask } from './tasks/delete-task/delete-task';
import { createTask } from './tasks/create-task/create-task';
import { getTasksByUser } from './tasks/get-tasks-by-user/get-tasks-by-user';
import { router } from './trpc';

export const appRouter = router({
  tasks: {
    deleteTask,
    createTask,
    getTasksByUser,
  },});
