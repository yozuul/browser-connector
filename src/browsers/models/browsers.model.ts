import { randomUUID } from 'node:crypto'
import {
   Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, HasOne
} from 'sequelize-typescript'
import { Projects } from 'src/projects/models/projects.model'
import { BrowsersTypes } from './browsers-types.model'
import { Tabs } from 'src/tabs/models/tabs.model'
import { Proxy } from 'src/proxy/models/proxy.model'

const { INTEGER, STRING } = DataType

@Table({ tableName: 'browsers' })
export class Browsers extends Model<Browsers> {
   @Column({
      type: STRING,
      unique: true, defaultValue: randomUUID, primaryKey: true
   }) id: string

   @ForeignKey(() => BrowsersTypes)
   @Column({
      type: INTEGER, allowNull: false
   }) browserTypeId: number

   @BelongsTo(() => BrowsersTypes, 'browserTypeId')
   browsersTypes: BrowsersTypes

   @Column({
      type: STRING, defaultValue: null
   }) webSocketAdress: string

   @Column({
      type: INTEGER, defaultValue: null
   }) debuggingPort: number

   @ForeignKey(() => Projects)
   @Column({
      type: STRING, allowNull: false
   }) projectId: string

   @BelongsTo(() => Projects, 'projectId')
   projects: Projects

   @HasMany(() => Tabs, 'browserId')
   tabs: Tabs[]

   @ForeignKey(() => Proxy)
   @Column({
      type: STRING, defaultValue: null
   }) proxyId: string;

   @BelongsTo(() => Proxy, 'proxyId')
   proxy: Proxy;
}
