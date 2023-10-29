import { randomUUID } from 'node:crypto'
import { Table, Column, Model, DataType, ForeignKey, HasMany } from 'sequelize-typescript'

import { Browsers } from 'src/browsers/models/browsers.model';
import { ProxyCreationAttr } from './interfaces';

const { INTEGER, STRING, BOOLEAN } = DataType

@Table({ tableName: 'proxy' })
export class Proxy extends Model<Proxy, ProxyCreationAttr> {
   @Column({
      type: STRING,
      unique: true, defaultValue: randomUUID, primaryKey: true
   }) id: string;

   @Column({
      type: STRING, defaultValue: null
   }) name: string;

   @Column({
      type: STRING, defaultValue: 'http'
   }) type: string;

   @Column({
      type: STRING, allowNull: false
   }) adress: string;

   @Column({
      type: INTEGER, allowNull: false
   }) port: number;

   @Column({
      type: STRING, defaultValue: null
   }) username: string;

   @Column({
      type: STRING, defaultValue: null
   }) password: string;

   @ForeignKey(() => Browsers)
   @Column({
      type: STRING, allowNull: false
   }) browserId: string;

   @HasMany(() => Browsers, 'proxyId')
   browsers: Browsers[];
}

