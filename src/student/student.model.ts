import { Prisma } from '@prisma/client';

export class Student implements Prisma.StudentCreateInput {
  name: string;
  age: number;
  gender: string;
}
