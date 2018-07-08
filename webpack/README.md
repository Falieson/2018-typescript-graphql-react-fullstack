# Webpack Structure

```text
| Webpack-Merge
├── Common
│   ├──  Client (Common)
│         ├──  Dev (Client)
│         ├──  Prod (Client)
│     |--  Server (Common)
│         ├──    Dev (Server)
│         ├──    Prod (Server)
```

## Server

Instead of using webpack's devServer we will use the server created at `/src/server/`

## Source Maps in Production

[Webpack says to use them](https://webpack.js.org/guides/production/#source-mapping) but I disagree with a couple of conditional premises:

1) If you are going mobile only, or mobile first, and load size is a consideration!
1) you will hopefully not have much to debug client side because its a new project!
1) build time can be a consideration, especially in a new project when you have either limited resources or time to complete it.
