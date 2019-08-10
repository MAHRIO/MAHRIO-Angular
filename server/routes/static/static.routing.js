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
    handler: function(req, rep) {
      if( fs.existsSync(root+'/public/'+publicPath + '/' + process.env.NODE_ENV + '/'+req.params.any) ) {
        rep.file(publicPath + '/' + process.env.NODE_ENV + '/'+req.params.any);
      } else {
        rep.file(publicPath + '/' + process.env.NODE_ENV + '/index.html');
      }
    }
  });
  server.route({
    path: '/{any*}',
    method: 'GET',
    handler: function(req, rep) {
      rep.file(publicPath + '/' + process.env.NODE_ENV + '/index.html');
    }
  });
};
