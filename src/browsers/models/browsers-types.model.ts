import { Table, Column, Model, DataType, HasMany, } from 'sequelize-typescript'
import { Browsers } from './browsers.model'
import { BrowsersTypesCreationAttr } from './interfaces'

const { INTEGER, STRING } = DataType

@Table({ tableName: 'browsers_types' })
export class BrowsersTypes extends Model<BrowsersTypes, BrowsersTypesCreationAttr> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, defaultValue: 'chromium'
   }) name: string

   @Column({
      type: STRING, allowNull: true
   }) filePath: string

   @HasMany(() => Browsers, 'browserTypeId')
   browsers: Browsers[]
}
