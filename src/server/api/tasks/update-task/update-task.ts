import { z } from 'zod';
import { authorizedProcedure } from '../../trpc';
import { prisma, Status } from '../../../../../prisma/server';
import { rethrowKnownPrismaError } from '@fhss-web-team/backend-utils';

const updateTaskInput = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(Status).optional(),
});

const updateTaskOutput = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(Status),
  completedDate: z.date().nullable(),
});

export const updateTask = authorizedProcedure
  .meta({ requiredPermissions: ['manage-tasks'] })
  .input(updateTaskInput)
  .output(updateTaskOutput)
  .mutation(async opts => {
    try {
      return await prisma.task.update({
        where: {
          id: opts.input.id,
          userId: opts.ctx.userId,
        },
        data: {
          title: opts.input.title,
          description: opts.input.description,
          status: opts.input.status,
          completedDate: opts.input.status == 'complete' ? new Date() : null,
        },
      });
    } catch (error) {
      rethrowKnownPrismaError(error);
      throw error;
    }
  });
