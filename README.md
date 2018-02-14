# JS gone FIT. How to reduce bundles size?
Demo page that has been presented during the internal knowledge sharing session.

# Branches / optimizations
You can diff the code from 2 branches to spot optimizations: `master` vs `optimized`

## How to run?
### Requirements

- node
- npm / yarn

### Workflow
Install dependencies

```
yarn
```

Development

```
npm start
```

This will start development server (webpack-dev-server)

Build (non production version)

```
npm run build
```

Build (production version)

```
npm run build:prod
```

This will build production ready version of bundle and put it to `dist/` folder
