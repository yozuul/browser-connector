import { randomUUID } from 'node:crypto'
import {
   Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, HasOne
} from 'sequelize-typescript'
import { BrowsersTypes } from './browsers-types.model'
import { Tabs } from 'src/tabs/models/tabs.model'
import { Proxy } from 'src/proxy/models/proxy.model'

const { INTEGER, STRING, BOOLEAN } = DataType

@Table({ tableName: 'browsers' })
export class Browsers extends Model<Browsers> {
   @Column({
      type: STRING,
      unique: true, defaultValue: randomUUID, primaryKey: true
   }) id: string

   @Column({
      type: STRING, defaultValue: null
   }) serviceName: string

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

   @Column({
      type: BOOLEAN, defaultValue: false
   }) autostart: boolean

   @HasMany(() => Tabs, 'browserId')
   tabs: Tabs[]

   @ForeignKey(() => Proxy)
   @Column({
      type: STRING, defaultValue: null
   }) proxyId: string;

   @BelongsTo(() => Proxy, 'proxyId')
   proxy: Proxy;
}
