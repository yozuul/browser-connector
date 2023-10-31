import { Injectable, OnModuleInit } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { BrowsersTypes } from 'src/browsers/models'
import { Proxy } from 'src/proxy/models/proxy.model'
import { mockBrowsersTypes, mockProxy } from 'data/mock-data'

import { exec } from 'child_process'
@Injectable()
export class SeederService implements OnModuleInit {
   constructor(
      @InjectModel(Proxy)
      private readonly proxyRepo: typeof Proxy,
      @InjectModel(BrowsersTypes)
      private readonly typesRepo: typeof BrowsersTypes,
   ) {}
   async onModuleInit() {
      exec('taskkill /F /IM electron.exe', (err) => {
        if (err) {
          console.error(`Error: ${err}`);
        }
      });
      await this.browserTypes()
      await this.proxy()
      process.on("SIGINT", () => {
         console.log('ddd')
      })
   }
   async browserTypes() {
      const isExist = await this.typesRepo.findAll();
      if (isExist.length === 0) {
         this.typesRepo.bulkCreate(mockBrowsersTypes() as any)
      }
   }
   async proxy() {
      const isExist = await this.proxyRepo.findAll();
      if (isExist.length === 0) {
         this.proxyRepo.bulkCreate(mockProxy() as any)
      }
   }
}
