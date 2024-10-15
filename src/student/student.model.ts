import { Prisma } from '@prisma/client';

export class Student implements Prisma.StudentCreateInput {
  id: number;
  name: string;
  age: number;
  gender: string;
}
