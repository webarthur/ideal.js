[Ideal.js](http://ideal.araujo.cc/) — Just another prototype JavaScript framework
==================================================

How it works?
---------

```html
<div id="gallery"></div>
```

```js
var $gallery = $e('gallery')
$gallery.append('<img src="[...]" />')

var $images = $gallery.findAll('img')
```

Including Ideal.js framework to my all.js using Gulp
---------

```js
var ideal = require('idealjs')
var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.src('src/*')
  .pipe(ideal({
    include: ['http']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('js'))
```

Import a function in Node JS
---------

```js
var ideal = require('idealjs')

ideal.import('Date.isLeapYear')

console.log(Date.isLeapYear(2020))
```

Cross-browser include
---------

```js
try {
  eval("class __A { func(p = 1) {} }; const __B = () => p; delete __A; delete __B;")
  document.write("<script src='{{{theme.url}}}/js/ideal.js'><\/script>")
}
catch (e) {
  document.write("<script src='{{{theme.url}}}/js/ideal-es5.js'><\/script>")
}
```

Core Functions
---------

* **$** -> $('menu a') / $findAll('menu a') / Element.findAll('')
* **$find([query])** -> same as document.querySelector()
* **$findAll([query])** -> same as document.querySelectorAll()
* **$all([className])** -> same as document.getElementsByTagName()

Element Functions
---------

* .append()
* .prepend()
* .after()
* .before()

Ajax Functions
---------

* http()
* http.post()
* http.put()
* http.delete()
* http.file()

URL Functions
---------

* location.getQueryParam([paramName], [query])
* location.getQueryParams([query])

Date Functions
---------

* Date.isLeapYear(2020)
* Date.isvalid('29/02/2020')
