# What are the possible ways to create objects in js

### There are many ways to create objects in js

1. Object constructor:

   ```js
   const obj = new Object();
   ```

2. Object's create method:

```js
const obj = Object.create(null);
```

3. Object Literal:

```js
const person {};
person.firstName = 'Max';
person.lastName = 'will';
person.age = 50;

// or
const p2 = {firstName : 'Max', lastName : 'will', age : 50};
```

4. Function constructor:

```js
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("vaibhav");
```

5. ES6 Class syntax:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");
```

6. Singleton pattern:

   A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

```js
var object = new (function () {
  this.name = "Sudheer";
})();
```
