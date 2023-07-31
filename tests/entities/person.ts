import { Entity, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { PersonDetail } from './person-detail';

@Entity()
export class Person {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  name!: string;

  @OneToOne(() => PersonDetail, (detail) => detail.person)
  detail?: PersonDetail;
}
