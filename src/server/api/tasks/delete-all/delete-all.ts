import { z } from 'zod';
import { authorizedProcedure } from '../../trpc';
import { prisma } from '../../../../../prisma/server';
import { rethrowKnownPrismaError } from '@fhss-web-team/backend-utils';

const deleteAllInput = z.null({});

const deleteAllOutput = z.void();

export const deleteAll = authorizedProcedure
  .meta({ requiredPermissions: ['manage-tasks'] })
  .input(deleteAllInput)
  .output(deleteAllOutput)
  .mutation(async opts => {
    try {
      await prisma.task.deleteMany({
        where: { userId: opts.ctx.userId },
      });
    } catch (error) {
      rethrowKnownPrismaError(error);
      throw error;
    }
  });
