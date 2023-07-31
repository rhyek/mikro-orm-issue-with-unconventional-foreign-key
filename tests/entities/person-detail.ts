import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Person } from './person';

@Entity()
export class PersonDetail {
  @PrimaryKey({ columnType: 'bigint' })
  id!: number;

  @OneToOne({
    entity: () => Person,
    joinColumn: 'id',
    mappedBy: 'detail',
    owner: true,
    persist: false,
  })
  person!: Person;

  @Property()
  age!: number;
}
