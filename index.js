// extends https://github.com/efacilitation/gulp-modify

var through = require('through2')

module.exports = function(modifier){
  return through.obj(function(file, enc, next){
    if (file.isBuffer() && modifier) {
      var src = file.contents.toString()
      // this === file
      modifier.apply(file, [src, function(err, result){
        file.contents = new Buffer(result)
        next(err, file)
      }])
    } else next(null, file)
  })
}