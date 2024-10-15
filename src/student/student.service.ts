import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getAllStudents(): Promise<Student[]> {
    return await this.prisma.student.findMany();
  }

  async getStudentById(id: number): Promise<Student | null> {
    return await this.prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async createStudent(data: Student): Promise<Student> {
    return await this.prisma.student.create({
      data,
    });
  }

  async updateStudent(id: number, data: Student): Promise<Student> {
    return await this.prisma.student.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  async deleteStudent(id: number): Promise<Student> {
    return await this.prisma.student.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
