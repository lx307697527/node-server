var fs = require('fs')

function route(pathname, query, handle, response) {
  console.info(pathname)
  fs.exists(__dirname + pathname + '.json', function(exists) {
    if (exists) {
      // handle(pathname);
      handle(query, response, pathname)
    } else {
      var data = JSON.parse(fs.readFileSync(__dirname + '/api/404.json'))
      console.log('No request handler found for ' + pathname)
      response.writeHead(404, {
        'Content-Type': 'application/json;charset=UTF-8'
      })
      response.write(JSON.stringify(data))
      response.end()
    }
  })
}

exports.route = route
