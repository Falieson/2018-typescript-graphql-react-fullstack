# SRC structure

```text
.
├── app/
│   ├── config.ts
│   ├── index.ts
│   ├── application/              # global definitions
│   ├── assets/                   # static files
│   ├── components/
│   ├── gql/                      # replaces redux
│   ├── meta/
│   ├── middleware/
│   ├── modules/
│   └── routes/
├── client/index.template.html
├── server/
│   ├── config.ts
│   ├── express.ts
│   ├── index.ts
│   ├── assets/                   # static files
│   ├── data/                     # connection to mongo
│       ├── models/
│       ├── mongodb.ts
│       ├── resolvers.ts
│       └── schema.ts
│   └── middleware/
│       ├── apollo/
│       └── express/
└── types/
```