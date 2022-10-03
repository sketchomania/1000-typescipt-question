"use strict";
exports.__esModule = true;
// this happens because the file is treated as a script rather than a module
//  module has its own scope but the scripts share the global scope
// to get rid of this we need to add an export statement at the top which exports nothing
// WATCH
// tsc main --watch
var message = 'Hello there 👀';
console.log(message);
