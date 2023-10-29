import { Module } from '@nestjs/common'

import { TabsController } from './tabs.controller'
import { TabsService } from './tabs.service'

import { SequelizeModule } from '@nestjs/sequelize'
import { Tabs } from './models/tabs.model'

@Module({
   imports: [
      SequelizeModule.forFeature([Tabs]),
   ],
   controllers: [TabsController],
   providers: [TabsService],
   exports: [TabsService]
})
export class TabsModule {}
