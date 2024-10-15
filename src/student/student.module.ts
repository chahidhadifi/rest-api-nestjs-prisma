import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [StudentModule],
  controllers: [StudentController],
  providers: [StudentService, PrismaService],
})
export class StudentModule {}
