import { faker } from '@faker-js/faker';
import { prisma, Prisma } from '../../server';

export async function createManyUsers() {
  const NUM_OF_USERS = 20;
  let users: Prisma.UserCreateManyInput[] = [];
  for (let i = 0; i <= NUM_OF_USERS; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    users.push({
      accountType: 'Student',
      firstName: firstName,
      lastName: lastName,
      netId: faker.string.alpha(5),
      preferredFirstName: firstName,
      preferredLastName: lastName,
    });
  }
  await prisma.user.createMany({ data: users });
}

export async function createUsers() {
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
