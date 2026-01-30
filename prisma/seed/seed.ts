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
  await deleteMany();
  await createUsers();
  await createTasks();

  if (args?.createMany === 'users') {
    await createManyUsers();
  }

  if (args?.createMany == 'tasks') {
    await createManyTasks();
  }
}
