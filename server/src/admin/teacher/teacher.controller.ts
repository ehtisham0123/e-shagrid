import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Teacher } from './entities/teacher.entity';


@ApiTags('Admin Teachers')
@Controller('admin/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @ApiOkResponse({
    type: Teacher,
    description: 'add new teacher',
  })
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @ApiOkResponse({
    isArray: true,
    type: Teacher,
    description: 'get all Teachers',
  })
  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @ApiOkResponse({
    type: Teacher,
    description: 'get teacher by given id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }
  
  @ApiOkResponse({
    type: Teacher,
    description: 'updated Teacher with given id',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @ApiOkResponse({
    type: Teacher,
    description: 'delete Teacher with given id',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }
}
