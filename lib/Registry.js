//
// # Rego
// *A generic implementation of the [service locator pattern](http://en.wikipedia.org/wiki/Service_locator_pattern)*
//


// ## Module Dependencies
var assert = require('assert');

module.exports = function createRegistry(name, list) {
  var registry = new Registry(name);

  // Import list if provided
  if(list) {
    registry.import(list);
  }

  // get or register a service
  function getOrRegister(name, definition) {
    if(name && !definition) {
      return registry.get(name);
    }
    if(name && definition) {
      return registry.register(name, definition);
    }

    return null;
  }

  // Expose the registry
  getOrRegister.registry = registry;

  return getOrRegister;
};

// ## Registry Constructor
var Registry = module.exports.Registry = function(name) {
  this.name = name || 'Item';
  this.list = {};
};


//
// ## Registry#get
// *Get a single item*
//
Registry.prototype.get = function(name) {
  var service = this.list[name];
  assert(service, this.name + ' not found: ' + name);
  return service;
};


//
// ## Registry#all
// *Get all items*
//
Registry.prototype.all = function() {
  return this.list;
};


//
// ## Registry#keys
// *Get all keys*
//
Registry.prototype.keys = function() {
  return Object.keys(this.list);
};


//
// ## Registry#register
// *Register an item*
//
Registry.prototype.register = function(name, item) {
  assert(!this.list[name], this.name + ' already exits: ' + name);
  this.list[name] = item;

  if(!this.hasOwnProperty(name)) this[name] = item;
  return this;
};


//
// ## Registry#remove
// *Remove an item*
//
Registry.prototype.remove = function(name) {
  assert(!this.list[name], this.name + ' not found: ' + name);
  delete this.list[name];
  return this;
};


//
// ## Registry#clear
// *Clear all items*
//
Registry.prototype.clear = function() {
  this.list = {};
  return this;
};


//
// ## Registry#import
// *Import items*
//
Registry.prototype.import = function(items) {
  this.list = items;
  return this;
};
