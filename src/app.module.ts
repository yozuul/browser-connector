import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectsModule } from './projects/projects.module'
import { BrowsersModule } from './browsers/browsers.module'
import { TabsModule } from './tabs/tabs.module'
import { ProxyModule } from './proxy/proxy.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
   imports: [
      SequelizeModule.forRootAsync({
         imports: [ConfigModule],
         useFactory: async (config: ConfigService) => ({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: config.get<string>('DATABASE_PASS'),
            database: config.get<string>('DATABASE_NAME'),
            autoLoadModels: true,
            logging: false,
            synchronize: true,
         }),
         inject: [ConfigService],
      }),
      ConfigModule.forRoot({
         isGlobal: true,
      }),
      BrowsersModule, TabsModule, ProjectsModule, ProxyModule, SeederModule
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
