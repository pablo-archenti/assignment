# Assignment

## Run with docker

```
$ docker-compose up
```

**Run App tests**
```
$ docker-compose run --rm app npm run test:ci
```


## Run manually

**Start App**
```
$ cd app
$ npm ci
$ npm start
```

**Start Api**
```
$ cd api
$ npm ci
$ npm run start:dev
```

**Run App tests**
```
$ cd app
$ npm run test:ci
```

### Load APP

Access http://localhost:3000

## Further improvements

- Styling/UX.
- [Graphql Code Generator](https://www.graphql-code-generator.com/) or similar for typing synchronization and automation.
- Extended error handling on App.
- More testing.