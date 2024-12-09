# birddog

A service that provides personal employment data for any client that requests it.

You can view a front-end client that consumes the API here: https://react-resume-v2.fly.dev/

# Highlights

- An in-memory database that can handle tables [source](https://github.com/smokinjoe/birddog/blob/main/src/datastore/DatabaseWithTables.ts)
  - bonus: example usage when seeding [source](https://github.com/smokinjoe/birddog/blob/main/src/datastore/seedTables.ts)
- Defined zod schemas to validate data at runtime [source](https://github.com/smokinjoe/birddog/tree/main/src/types/schemas)
- Graceful handling of errors with logging [source](https://github.com/smokinjoe/birddog/blob/main/src/utils/errors/handleError.ts)
