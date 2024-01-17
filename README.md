# lagunite



## CDN

| File | Link |  Last modified  |  Size  |
| ------ |------ |------ | ------ |
| lagunite-config.css   |  [http://lagunite.com/release/v0.50/lagunite-config.css] |      	2021-12-29  |    4k       |
| lagunite.css          |  [http://lagunite.com/release/v0.50/lagunite.css] |        	2021-12-29 |   84k       |
| lagunite.js           |  [http://lagunite.com/release/v0.50/lagunite.js] |      	2021-12-29 |   4k        |





## YARN
```sh
yarn add --modules-folder ./public lagunite
```

## BOWER
```sh
bower install https://github.com/arielivandiaz/lagunite.git
```


## NPM
```sh
npm install lagunite --prefix ./public
```


## CSS Structure

└── 📁css
    └── 📁00-core
        └── 00-config.css
        └── 01-root.css
    └── 📁01-text
        └── 01-fonts.css
        └── 02-typography.css
    └── 📁02-colors
        └── 01-text.css
        └── 02-background.css
    └── 📁03-layout
        └── 01-flex.css
        └── 02-grid.css
        └── 03-positioning.css
        └── 04-margin.css
        └── 05-padding.css
        └── 10-size.css
    └── 📁04-decorators
        └── borders.css
        └── decorators.css
    └── 📁05-atoms
        └── buttons.css
    └── 📁06-molecules
    └── 📁07-form
        └── form.css
    └── 📁10-misc
        └── display.css
        └── figures.css


### Server 

```sh
npm i -g http-server
```