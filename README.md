## Information

<table>
  <tr>
    <td>Package</td><td>gulp-edit</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Edit files with gulp</td>
  </tr>
</table>

## Usage

### `edit(modifier)`

- modifier(src, cb): [function]

```js
var edit = require('gulp-edit')

gulp.task('edit', function() {
  return gulp.src('./*.txt')
    .pipe(edit(function(src, cb){
      // this === file
      var err = null
      src += '- modified!'
      cb(err, src)
    }))
    .pipe(gulp.dest('./'))
})
```
