# vuejs

## Initialization
```
yarn install
```

build (one of following):
```
./node_modules/.bin/encore dev
./node_modules/.bin/encore production
./node_modules/.bin/encore dev --watch
./node_modules/.bin/encore dev-server --host 0.0.0.0
./node_modules/.bin/encore dev-server --host 0.0.0.0 --hot
```
(Host can be ommited if testing in localhost)

## How to create an example project:
### 1) initializing project
```
yarn init
yarn add -D @symfony/webpack-encore node-sass sass-loader vue vue-loader@^14.2.2 vue-template-compiler lodash
```

### project structure
1) Prepare directory structure
2) Prepare webpack config (https://symfony.com/doc/current/frontend/encore/simple-example.html)

### running dev server
```
./node_modules/.bin/encore dev-server
```

