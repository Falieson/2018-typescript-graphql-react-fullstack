# SRC structure

The application source is **typescript**, the rest of the framework is **javascript**.

```text
.
├── config.ts                     # shared config (client/server)
├── app/
│   ├── config.ts                 # client config
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
│   ├── config.ts                 # server config
│   ├── express.ts                # web server details
│   ├── index.ts                  # server connections register
│   ├── mongodb.ts                # DB & ORM details
│   ├── assets/                   # static files
│   ├── data/
│       ├── models/
│       ├── resolvers.ts
│       └── schema.ts
│   └── middleware/
│       ├── apollo/
│       └── express/
└── types/
```
