# element-in-document

[![JavaScript Style Guide][js-standard-image]][js-standard-url]
[![NPM version][npm-image]][npm-url]
[![NPM download][npm-download]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

Determine if the client rect of element is positioned on the document

## Install
```
$ npm install element-in-document
```

## API
`elementInDocument(element, threshold = 1.0)`
Returns: `Boolean`

**Options**

|argument|type    |description|default value|
|--------|--------|-----------|-------------|
|`element`|`HTMLElement`| Target Node | not null |
|`threshold`|`float`|  Greater than or equal to (`threshold` * 100)% of the pixels in the `element` was on document | 1.0|


```
var elementInDocument = require('element-in-document')

var dom = document.body

elementInDocument(dom)
// true

var div = document.createElement('div')
div.style.width = '200px'
div.style.height = '200px'
div.style.position = 'absolute'
div.style.left = '-200px'
div.style.top = '-200px'

document.body.appendChild(div)

elementInDocument(div)
// `false` because div is actually not seen on document
```


[js-standard-url]: http://standardjs.com/
[js-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[npm-url]: https://npmjs.org/package/element-in-document
[npm-image]: https://img.shields.io/npm/v/element-in-document.svg?style=flat-square
[npm-download]: https://img.shields.io/npm/dm/element-in-document.svg?style=flat-square

[depstat-url]: https://david-dm.org/kyungw00k/element-in-document
[depstat-image]: https://david-dm.org/kyungw00k/element-in-document.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/kyungw00k/element-in-document#info=devDependencies
[depstat-dev-image]: https://david-dm.org/kyungw00k/element-in-document/dev-status.svg?style=flat-square
