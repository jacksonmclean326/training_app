import { faker } from '@faker-js/faker';
import { prisma } from '../../server';

export const createManyTasks = async () => {
  const NUM_OF_TASKS = 10;
  const data = [];
  for (let i = 0; i < NUM_OF_TASKS; i++) {
    data.push({
      userId: 'student',
      title: faker.book.title(),
      description: faker.lorem.sentence(),
    });
  }
  await prisma.task.createMany({
    data: data,
  });
};

export const createTasks = async () => {
  await prisma.task.createMany({
    data: [
      {
        title: 'Do Dishes',
        description: 'I have to do them cuz',
        userId: 'student',
      },
      {
        title: 'Do Taxes',
        description: 'I have to do them cuz',
        userId: 'employee',
      },
    ],
  });
};
