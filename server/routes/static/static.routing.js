var fs = require('fs');

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
    handler: function(req, h) {
      console.log("static.routing.GET: ")
      if( fs.existsSync(root+'/public/'+publicPath + '/' + process.env.NODE_ENV + '/'+req.params.any) ) {
        return h.file(publicPath + '/' + process.env.NODE_ENV + '/'+req.params.any);
      } else {
        console.log("static.routing.GET: requested " + publicPath + '/' + process.env.NODE_ENV + '/index.html')
        return h.file(publicPath + '/' + process.env.NODE_ENV + '/index.html');
      }
    }
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