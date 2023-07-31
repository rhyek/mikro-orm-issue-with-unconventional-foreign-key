import { Entity, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { PersonDetail } from './person-detail';

@Entity()
export class Person {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  name!: string;

  @OneToOne({
    entity: () => PersonDetail,
    joinColumn: 'id',
    mappedBy: 'person',
    owner: false,
    persist: false,
    nullable: true,
  })
  detail?: PersonDetail;
}
