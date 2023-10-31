import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { SeederService } from './seeder-service'
import { Browsers, BrowsersTypes } from 'src/browsers/models'
import { Proxy } from 'src/proxy/models/proxy.model'
import { Tabs } from 'src/tabs/models/tabs.model'

@Module({
  imports: [
    SequelizeModule.forFeature([
      Browsers, BrowsersTypes, Tabs, Proxy
   ]),
  ],
  providers: [SeederService],
})
export class SeederModule {}