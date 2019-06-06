<p align='center'>
  <h1 align='center'>Typescript GraphQL React Fullstack App (TGRStack)</h1>
</p>

[![TypeScript](https://img.shields.io/badge/TypeScript-2.9.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![WebPack](https://img.shields.io/badge/WebPack-4.12.0-blue.svg?style=flat-square)]('#')
[![Node](https://img.shields.io/badge/Node-10.6.0-blue.svg?style=flat-square)](https://nodejs.org/en/)
[![TSLint](https://img.shields.io/badge/TS_Lint-5.10.0-blue.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-22.4.6-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![ExpressServer](https://img.shields.io/badge/Express_Server-4.16.3-red.svg?style=flat-square)](https://github.com/expressjs/express)
[![Mongoose](https://img.shields.io/badge/Mongoose-5.1.7-red.svg?style=flat-square)](https://github.com/Automattic/mongoose)
[![ApolloServer](https://img.shields.io/badge/Apollo_Server-1.3.6-red.svg?style=flat-square)](https://github.com/apollographql/apollo-server)

[![React](https://img.shields.io/badge/React-16.4.1-8400ff.svg?style=flat-square)]('#')
[![ApolloClient](https://img.shields.io/badge/Apollo_Client-2.3.4-8400ff.svg?style=flat-square)](https://github.com/apollographql/apollo-client)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## About

This starter kit is a launching point for **[Typescript Graphql React Fullstack prototyping](https://github.com/Falieson/tgrstack.com/wiki/ts-gql-react-fullstack-home-page)**. Running the build script compiles `src/` into `build/` with `build/server/` being an express-server ready for `pm2`.

This module is part of a collection of uniformly built starter-kits designed for large-scale application development with TypeScript, GraphQL, and React. Find these, articles, and examples at [www.TGRStack.com](http://www.TGRStack.com). Skip to the bottom for links to a series of tutorials that walkthrough the creation of this module.

## Requirements

- [Install Node and Setup Dev Envionment](https://github.com/Falieson/tgrstack.com/wiki/Install-Environment) - Most can skip this
- [Install MongoDB](https://github.com/Falieson/tgrstack.com/wiki/Install-MongoDB) - Dev Endpoint is config'd to use a local MongoDB
- Review `./webpack/paths.js`,  `./scripts/*`, `./tslint.json`, `./docs/`

## Commands - READ THIS

```bash
* nps                   # Starts the Dev Server, watching for rebuilds.
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```

## Built In

- [x] Page layed out with Header/Body
- [x] Router split between LoggedIn and LoggedOut
- [ ] AuthWall w/ PassportJS. Create Users and Login w/ Passport Password, stored in Mongo

## Features

### Core

- [x] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [x] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs
- [x] 🚦  `tslint` configured for strict, consistent, code style

### Express

- [x] :globe_with_meridians:  `express-server`
- [x] :bread: in dev a browser to the website is opened
- [x] :new_moon_with_face:  `express-sessions`
- [ ] :passport_control:  `passport` for Authorization

### MongoDB

- [x] :bank:  `mongodb` dev helpers (`./scripts/mongo.js`)
- [x] :bullettrain_front:  `mongoose` ORM for better MongoDB development
- [ ] :passport_control:  `passport-local-mongoose` for Auth w/ Password

### GraphQL

- [x] :radio:  `apollo-client` w/ `link-state` instead of `react-redux`
- [x] :satellite: `apollo-server`
- [x] :yum:  `graphiql` (not `playground` because issues w/ sessions/passport)
- [ ] :satellite: `apollo-server` w/ `subscriptions` (websocket)
- [ ] ~~:satellite: `apollo-server 2`~~ <=== `./docs/THINGS_THAT_NEED_FIXING.md`

### React

- [x] :dragon:  React 16+
- [x] :space_invader: page reloads when a change is available, exits when the server is closed
- [ ] :space_invader: HMR reloads the changed code w/o refreshing the entire page
- [ ] :space_invader: BrowserSync

### Tests

- [x] 🎭 `jest` as the test framework.
- [x] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.
- [x] 🎭 `enzyme`  makes it easier to assert, manipulate, and traverse components.
- [x] 🎭 `react-testing-library` maintainable tests that avoid impl. details.
- [ ] 🎭 `jest-dom` patterns for dom testing, compat w/ `react-testing-library`.

### Build (w/ Webpack)

- [x] 📦  All source is bundled using Webpack v4
- [x] 🌟  webpack for [dev, prod, common] X [server, client]
- [x] 🚦  `ts-loader` for compiling typescript
- [ ] 🚦  `webpack-graphql-loader` for separating gql from ts files
- [x] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  HappyPack for Multi-Threaded builds
- [ ] 🤖  Auto generated Vendor DLL for smooth development experiences
- [ ] 🍃  Tree-shaking

### Utils

- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns

## Getting started

To use the starter-kit to build your own ts-module run these commands:

```bash
git clone https://github.com/Falieson/2018-typescript-graphql-react-fullstack my-project
cd my-project
rm -rf .git && git init
git add .
git commit -m "INIT'd w/ @Falieson/2018-typescript-graphql-react-fullstack@SHA4985"
npm install
nps test
nps
```

Open package.json and reset following fields:

```text
- name
- version ( It is recommended to start from 1.0.0 )
- description
- main ( "build/my-project.js" => "build/server/index.js" )
- repository.url
- author
- license ( use whatever you want )
```

Now go make some changes to `src/index.ts` to see the tooling in action.

## Stack

- [TS-React-App](https://github.com/Falieson/2018-typescript-react-app)
- [TS-GraphqL-Endpoint](https://github.com/Falieson/2018-typescript-graphql-endpoint)
- [TS-Module](https://github.com/Falieson/2018-typescript-module)

## Docs

- [Wiki](https://github.com/Falieson/tgrstack.com/wiki)
- [Tutorials and Examples](http://www.tgrstack.com/)
- [Changelog](/CHANGELOG.md)
