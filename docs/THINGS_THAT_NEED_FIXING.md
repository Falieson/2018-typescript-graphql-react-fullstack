# FIX THIS

Probably need to enable typescript importing of JS for some global configs and pathing

## DRY

- mongo ports in scripts/mongo and src/server/config
- mongo ports in scripts/_paths and webpack/_paths
- app ports in webpack/ and src/config usedBy src/s[erver & client]/config
- gql ports in scripts/gql and src/config usedBy src/s[erver & client]/config

## RESOLVED BY

- consolidate env defaults to `.env.example`
- webpack loads `.env.example` if `.env` doesn't exist

## Long Term Strategy

- create a `ts-cli-module` that will be used to make a new `tgr-cli`
- `/tgr/` directory is a ts module that builds out to `/tgr/index.js`
- has its own nps scripts which is loaded by `/scripts/index.js` if `/tgr/index.js` exists
