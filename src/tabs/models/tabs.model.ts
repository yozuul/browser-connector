import { randomUUID } from 'node:crypto'
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, } from 'sequelize-typescript'

import { Browsers } from 'src/browsers/models/browsers.model'

const { INTEGER, STRING, BOOLEAN } = DataType

@Table({ tableName: 'tabs' })
export class Tabs extends Model<Tabs> {
   @Column({
      type: STRING,
      unique: true, defaultValue: randomUUID, primaryKey: true
   }) id: string

   @Column({
      type: STRING, allowNull: false
   }) serviceName: string

   @ForeignKey(() => Browsers)
   @Column({
      type: STRING, allowNull: false
   }) browserId: string

   @BelongsTo(() => Browsers, 'browserId')
   browsers: Browsers;

   @Column({
      type: STRING, allowNull: false
   }) browserTabId: string

   @Column({
      type: STRING, allowNull: false
   }) startedPage: string

   @Column({
      type: STRING, defaultValue: null
   }) cookie: string

   @Column({
      type: STRING, defaultValue: null
   }) localstorage: string

   @Column({
      type: BOOLEAN, defaultValue: true
   }) devtools: boolean

   @Column({
      type: STRING, defaultValue: null
   }) viewPort: string
}
