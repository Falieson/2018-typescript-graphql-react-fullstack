# FIX THIS

Probably need to enable typescript importing of JS for some global configs and pathing

## DRY

- R0 mongo ports in scripts/mongo and src/server/config
- R0 mongo ports in scripts/_paths and webpack/_paths
- R1 app ports in webpack/ and src/config usedBy src/s[erver & client]/config
- R1 gql ports in scripts/gql and src/config usedBy src/s[erver & client]/config
- R1 web address in scripts/open should come from .env/.env.development

### RESOLVER 0

- consolidate env defaults to `.env.example`
- webpack loads `.env.example` if `.env` doesn't exist

### Resolver 1

- have the scripts file use dotConfig to load the .env files
- Long Term resolved by `tgr-cli`

### Long Term Strategy

- create a `ts-cli-module` that will be used to make a new `tgr-cli`
- `/tgr/` directory is a ts module that builds out to `/tgr/index.js`
- has its own nps scripts which is loaded by `/scripts/index.js` if `/tgr/index.js` exists

## Apollo Server 2 is shit right now

- trying to deploy the new project w/ AS2 rather than AS1 and its being a bitch
- going to just run w/ AS1 for now until AS2 has better backwards-compatability
