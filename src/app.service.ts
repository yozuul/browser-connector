import { Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class AppService implements OnModuleInit {
   async onModuleInit() {

   }
   getHello(): string {
      return 'Hello World!';
   }
}
