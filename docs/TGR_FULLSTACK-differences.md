# Key Differences from the rest of the TGR-Stack starterkit

The overarching principle behind TGR stack is that everything should be modularized because its the
  inevitable state of a scalable process. This Fullstack module violates this principle for the
  key reason that this is used for prototyping, not scaling. With this starterkit you can complete
  an entire project in a weekend, and be in a strong place to "dissolve" the fullstack app down into
  TGR-stack modules and endpoints.

If you are starting a fresh big idea, modularization is an extra investment (like testing) that can
  be burdensome to a new project. There will be many pivots and idea prioritizations which will
  determine the final project deliverables. When modularizing you have extra weight that comes from
  git, npm, versioning, and more which all slows down a prototyping cycle.

## Webpack Differences

Comparing the `/webpack/` config to other TGR-Stack projects.

The full stack app comes with a webserver that has a number of mmiddlewares applied to it. While webpack's devServer provides a lot of nice tooling, it is replaced with the server that is shipped with the build. The main reason this is necessary is because `src/server` does 3 main things:

- provides a gql endpoint
- connects to the database
- serves the client code (react JS, html, css)
