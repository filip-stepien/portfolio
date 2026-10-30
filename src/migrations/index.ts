import * as migration_20261030_211304_init from './20261030_211304_init';

export const migrations = [
  {
    up: migration_20261030_211304_init.up,
    down: migration_20261030_211304_init.down,
    name: '20261030_211304_init'
  },
];
