module.exports = function(req, res, next) {
  res.provide = function( template , data ) {
    if (!data) { var data = {}; }

    res.format({
      json: function() { res.send( data[ template ] ); },
      html: function() { res.render( template , data ); }
    });
  }
  
  next();
}
