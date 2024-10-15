import { Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Student } from './student.model';
import { StudentService } from './student.service';

export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string): Promise<Student> {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  async createStudent(student: Student): Promise<Student> {
    return this.studentService.createStudent(student);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string): Promise<void> {
    this.studentService.deleteStudent(Number(id));
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    student: Student,
  ): Promise<Student> {
    return this.studentService.updateStudent(Number(id), student);
  }
}
