# Rego
*A generic implementation of the [service locator pattern](http://en.wikipedia.org/wiki/Service_locator_pattern)*

## Install
```bash
$ npm install --save rego
```

## Usage
```javascript
// Require the module
var rego = require('rego');

// Create a registry called 'Services'
var services = rego('Services');

// Register a service
services('myService', myService);

// Get a service
services('myService');
```

## API

### Exports

#### rego(name, items)

 - **name:** `String` The name of your collection. Defaults to `"Items"`
 - **list:** `Object` An Object of items to pre-register (optional)

 Returns a function with signature: `function(name, item)`. If an item is passed then it will attempt to register the item

#### Registry(name) **(Constructor)**
*Creates a new Registry*

#### Registry#get(name)
*Returns a service by name*

 - **name:** `String` The name of the service

## Registry#register(name, item)
*Registers a new service*

 - **name:** `String` The name of the service
 - **item:** `Mixed` The item to store

## Registry#remove(name)
*Removes a service from the registry*

 - **name:** `String` The name of the service

## Registry#all()
*Returns an Array of services*

## Registry#keys()
*Returns an Array of service names*

## Registry#clear()
*Clears the entire registry*

## Registry#import(list)
*Imports an Array of services*

 - **list:** `Array` An Array of services to import.

## License

The MIT License (MIT)

Copyright (c) 2014 James Wyse <james@jameswyse.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
