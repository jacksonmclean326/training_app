import { generateFakeUserData } from '@fhss-web-team/backend-utils';
import { appRouter } from '../../api.routes';
import { describe, beforeAll, afterAll } from 'vitest';
import { prisma, User } from '../../../../../prisma/server';

describe('Create task', () => {
  let requestingUser: User;
  let createTask: ReturnType<
    typeof appRouter.createCaller
  >['tasks']['createTask'];

  beforeAll(async () => {
    requestingUser = await prisma.user.create({
      data: generateFakeUserData({
        permissions: [],
      }),
    });
    createTask = appRouter
      .createCaller({ userId: requestingUser.id })
      .tasks
      .createTask;
  });

  afterAll(async () => {
    await prisma.user.delete({ where: { id: requestingUser.id } });
  });
});