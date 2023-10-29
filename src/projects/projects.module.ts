import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'

import { Projects } from './models/projects.model'

@Module({
  imports: [
     SequelizeModule.forFeature([Projects]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
