import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { ProxyController } from './proxy.controller'
import { ProxyService } from './proxy.service'

import { Proxy } from './models/proxy.model'

@Module({
   imports: [
      SequelizeModule.forFeature([Proxy]),
   ],
   controllers: [ProxyController],
   providers: [ProxyService]
})
export class ProxyModule {}
