import { prisma } from '../../server';

export async function deleteMany() {
  await prisma.user.deleteMany();
  await prisma.task.deleteMany();
}
