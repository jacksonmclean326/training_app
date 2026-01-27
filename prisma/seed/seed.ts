import { defineOptions, SeedArguments } from './types';
import { deleteMany } from './functions/delete';
import { createManyUsers, createUsers } from './functions/createUsers';
import { createManyTasks, createTasks } from './functions/createTasks';

export const options = defineOptions({
  createMany: {
    type: 'string',
    description: 'createManyRecords  createTasks();(users, tasks)',
  },
});

export async function seed(args?: SeedArguments) {
  deleteMany();
  createUsers();
  createTasks();

  if (args?.createMany === 'users') {
    createManyUsers();
  }

  if (args?.createMany == 'tasks') {
    createManyTasks();
  }
}
