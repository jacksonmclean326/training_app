import { generateFakeUserData } from '@fhss-web-team/backend-utils';
import { appRouter } from '../../api.routes';
import { describe, beforeAll, afterAll } from 'vitest';
import { prisma, User } from '../../../../../prisma/server';

describe('Delete task', () => {
  let requestingUser: User;
  let deleteTask: ReturnType<
    typeof appRouter.createCaller
  >['tasks']['deleteTask'];

  beforeAll(async () => {
    requestingUser = await prisma.user.create({
      data: generateFakeUserData({
        permissions: [],
      }),
    });
    deleteTask = appRouter
      .createCaller({ userId: requestingUser.id })
      .tasks
      .deleteTask;
  });

  afterAll(async () => {
    await prisma.user.delete({ where: { id: requestingUser.id } });
  });
});