import { Table, Column, Model, DataType, HasMany, } from 'sequelize-typescript'
import { randomUUID } from 'node:crypto'
import { Browsers } from 'src/browsers/models/browsers.model';

const { INTEGER, STRING, BOOLEAN } = DataType

@Table({ tableName: 'projects' })
export class Projects extends Model<Projects> {
   @Column({
      type: STRING,
      unique: true, defaultValue: randomUUID, primaryKey: true
   }) id: string

   @Column({
      type: STRING,
      allowNull: false
   }) name: string;

   @Column({
      type: STRING,
      allowNull: false
   }) platformUrl: string;

   @Column({ // Если true, то все экземпляры браузеров стартуют вместе с проектом
      type: BOOLEAN,
      allowNull: false, defaultValue: false
   }) autostart: boolean

   @HasMany(() => Browsers, 'projectId')
   browsers: Browsers[]
}

