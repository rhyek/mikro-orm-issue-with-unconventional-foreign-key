import { Entity, OneToOne, PrimaryKeyType, Property } from '@mikro-orm/core';
import { Person } from './person';

@Entity()
export class PersonDetail {
  [PrimaryKeyType]?: number;

  @OneToOne({
    entity: () => Person,
    fieldName: 'id',
    primary: true,
  })
  person!: Person;

  @Property()
  age!: number;
}
