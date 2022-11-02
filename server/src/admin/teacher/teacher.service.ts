import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from '@prisma/client';

@Injectable()
export class TeacherService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    console.log(createTeacherDto)
    const teacher = await this.prismaService.teacher.create({
      data: createTeacherDto,
    });
    return teacher;
  }

  async findAll(): Promise<Teacher[]> {
    return await this.prismaService.teacher.findMany();
  }

  async findOne(id: number): Promise<Teacher> {
    return await this.prismaService.teacher.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
