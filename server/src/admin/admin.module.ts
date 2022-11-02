import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';

@Module({
  controllers: [AdminController,TeacherController],
  providers: [AdminService,TeacherService],
})
export class AdminModule {}
