import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common'
import { BrowsersService } from './browsers.service'
import { Browsers } from './models/browsers.model'

@Controller('browsers')
export class BrowsersController {
   constructor(private readonly browsersService: BrowsersService) {}

   @Get()
   getAll(): Promise<Browsers[]> {
      return this.browsersService.getAll()
   }

   @Get(':id')
   getById(@Param('id') id: string): Promise<Browsers> {
      return this.browsersService.getById(id)
   }

   @Post()
   create(@Body() browser: Browsers): Promise<Browsers> {
      return this.browsersService.create(browser)
   }

   @Put(':id')
   async update(@Param('id') id: string, @Body() browser: Browsers): Promise<Browsers> {
      const [affectedCount, [updatedBrowser]] = await this.browsersService.update(id, browser);
      if (affectedCount === 0) {
         throw new NotFoundException(`Browser with id ${id} not found`)
      }
      return updatedBrowser
   }

   @Delete(':id')
   delete(@Param('id') id: string): Promise<void> {
      return this.browsersService.delete(id)
   }
}