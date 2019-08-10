var fs = require('fs');
var ngHapiEngine = require('@nguniversal/hapi-engine');

module.exports = function(server, root, publicPath) {
  server.route({
    method: 'GET',
    path: '/static/{any?}',
    handler: {
      directory: {
        path: './static/'
      }
    }
  })
  server.route({
    path: '/{any}',
    method: 'GET',
    handler: (req) => ngHapiEngine({req, bootstrap: ServerAppModule})
  });
  server.route({
    path: '/{any*}',
    method: 'GET',
    handler: function(req, h) {
      console.log("static.routing.GET requesting " +publicPath + '/' + process.env.NODE_ENV + '/index.html')
      return h.file(publicPath + '/' + process.env.NODE_ENV + '/index.html');
    }
  });
};