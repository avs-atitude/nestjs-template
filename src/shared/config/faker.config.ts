import { Faker, de_CH, de, en, base, pt_BR } from '@faker-js/faker';

export const faker = new Faker({
  locale: [pt_BR, de_CH, de, en, base],
});