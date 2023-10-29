import { Injectable, OnModuleInit } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { BrowsersTypes } from './browsers-types.model'

@Injectable()
export class BrowserMockData implements OnModuleInit {
   constructor(
      @InjectModel(BrowsersTypes)
      private readonly typesRepo: typeof BrowsersTypes
   ) {}
   async onModuleInit() {
      const isExist = await this.typesRepo.findAll()
      if(isExist.length === 0) {
         const defaultTypes = [
            {
               name: 'chromium',
               filePath: null
            },
            {
               name: 'chrome.win',
               filePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
            },
            {
               name: 'yandex.win',
               filePath: 'C:\\Users\\Administrator\\AppData\\Local\\Yandex\\YandexBrowser\\Application\\browser.exe'
            },
         ]
         this.typesRepo.bulkCreate(defaultTypes)
      }
   }
}
