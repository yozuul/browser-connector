import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { BrowsersController } from './browsers.controller'
import { BrowsersService } from './browsers.service'

import { Browsers, BrowsersTypes } from './models'

@Module({
   imports: [
      SequelizeModule.forFeature([
         Browsers, BrowsersTypes
      ]),
   ],
   controllers: [BrowsersController],
   providers: [BrowsersService]
})
export class BrowsersModule {}
