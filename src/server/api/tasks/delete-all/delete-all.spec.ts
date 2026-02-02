import { generateFakeUserData } from '@fhss-web-team/backend-utils';
import { appRouter } from '../../api.routes';
import { describe, beforeAll, afterAll } from 'vitest';
import { prisma, User } from '../../../../../prisma/server';

describe('Delete all', () => {
  let requestingUser: User;
  let deleteAll: ReturnType<
    typeof appRouter.createCaller
  >['tasks']['deleteAll'];

  beforeAll(async () => {
    requestingUser = await prisma.user.create({
      data: generateFakeUserData({
        permissions: [],
      }),
    });
    deleteAll = appRouter
      .createCaller({ userId: requestingUser.id })
      .tasks
      .deleteAll;
  });

  afterAll(async () => {
    await prisma.user.delete({ where: { id: requestingUser.id } });
  });
});