process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/'+process.env.NODE_ENV+'.json');

for( var key in config ) {
  if( process.env[key] ) {
    config[key] = process.env[key] || config[key];
  }
}
console.log('Running '+process.env.NODE_ENV );

require('mahrio').runServer(config, __dirname ).then( function( server ) {

  for( var i in config['USER_INTERFACES']){
    var ui = config['USER_INTERFACES'][i];
    require('./routes/static/static.routing')( server, __dirname, ui['PATH']);
  }
});
