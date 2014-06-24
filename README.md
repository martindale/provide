provide
=======

Express middleware to "provide" resources as both JSON objects and rendered HTML documents.

provides assumes you have a template configured by the same name as the provided object.

## Example
```javascript
var app = require('express')();

/* configure view engine, using Jade (defaults to ./views/) */
app.set('view engine', 'jade');

/* enable the use of res.provide */
app.use( require('provide') );

/* an example route */
app.get('/thing', function(req, res, next) {
  res.provide('thing', {
    thing: { foo: 'bar' }
  });
});

app.listen(3000);

```

### Results
```
> curl http://localhost:3000/thing
{"foo": "bar"}
```
Requesting an HTML version of that "thing" will give you exactly that:
```
> curl -H "Accept: text/html" http://localhost:9200/thing
<!DOCTYPE html>
<html>
...
```
