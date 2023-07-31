import { MikroORM } from '@mikro-orm/mysql';
import { faker } from '@faker-js/faker';
import { Person } from './entities/person';
import { PersonDetail } from './entities/person-detail';

describe('one to one relation with dependent table having primary key as foreign key', () => {
  let orm: MikroORM;

  beforeEach(async () => {
    orm = await MikroORM.init({
      entities: [Person, PersonDetail],
      dbName: 'mikro_orm_test',
      type: 'mysql',
      clientUrl: 'mysql://root:test@localhost:3306/mikro_orm_test',
      persistOnCreate: true,
      // debug: ['query', 'query-params'],
    });
  });

  afterEach(async () => {
    await orm.close();
  });

  test('id is not null when creating a detail record', async () => {
    const name = faker.person.fullName();
    {
      const em = orm.em.fork();
      em.create(Person, { name, detail: { age: 20 } });
      await em.flush();
    }
    {
      const em = orm.em.fork();
      const person = await em.findOne(Person, { name });
      expect(person).not.toBeNull();
      expect(person!.id).toEqual(expect.any(Number));
    }
  });

  test('id is not null when NOT creating a detail record', async () => {
    const name = faker.person.fullName();
    {
      const em = orm.em.fork();
      em.create(Person, { name });
      await em.flush();
    }
    {
      const em = orm.em.fork();
      const person = await em.findOne(Person, { name });
      expect(person).not.toBeNull();
      expect(person!.id).toEqual(expect.any(Number));
    }
  });
});
