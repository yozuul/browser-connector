import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Browsers } from './models/browsers.model'

@Injectable()
export class BrowsersService {
   constructor(
      @InjectModel(Browsers)
      private readonly browsersModel: typeof Browsers,
   ) {}

   async getAll(): Promise<Browsers[]> {
      return this.browsersModel.findAll()
   }

   async getById(id: string): Promise<Browsers> {
      return this.browsersModel.findByPk(id)
   }

   async create(browser: Browsers): Promise<Browsers> {
      return this.browsersModel.create(browser)
   }

   async update(id: string, browser: Browsers): Promise<[number, Browsers[]]> {
      return await this.browsersModel.update(browser, {
         where: { id },
         returning: true,
      })
   }

   async delete(id: string): Promise<void> {
      const browser = await this.getById(id)
      if (browser) {
         await browser.destroy()
      }
   }
}
// "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --proxy-server=http://username:password@proxyserver:port
