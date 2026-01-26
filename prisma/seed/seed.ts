import { object } from 'zod';
import { prisma } from '../server';
import { defineOptions, SeedArguments } from './types';

export const options = defineOptions({});

export async function seed(args?: SeedArguments) {
  await prisma.user.createMany({
    data: [
      {
        accountType: 'Student',
        firstName: 'Jackson',
        lastName: 'McLean',
        netId: 'jcmsa',
        id: 'student',
        preferredFirstName: 'jackson',
        preferredLastName: 'McLean',
        roles: ['user'],
      },
      {
        accountType: 'Employee',
        firstName: 'Jeff',
        lastName: 'Bezos',
        netId: 'jeffds',
        id: 'employee',
        preferredFirstName: 'jeff',
        preferredLastName: 'bezos',
        roles: ['admin'],
      },
    ],
  });
}
