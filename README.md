# Express Example
Example of using Express to create a RESTful API with Node.js

## How to understand this example
This example is based on [the Jersey API example from TD#5](https://github.com/jking31cs/jersey-api-example). 
You are required to implement a service that exposes a RESTful API 
to list, add, update and delete user records from a database using Express and Node.js.
You are provided with a reference implementation for a similar service that manages Todo lists. 
The reference code provided is under `services/todo.js`.

Instead of using Google App Engine for storage, this example uses mock storage
services that export an API similar to TD#5's Store interface: `getAll`, `get` and `save`.

One way that this API differs, however, from TD#5's Store is that its functions
are non-blocking: (i.e.) they return immediately without waiting for any underlying I/O ops to complete.
Instead, these functions follow the JavaScirpt asynchronous tradition:
they are all passed a callback function which will be called upon completion of the requested operation
and passed any return values, including error flags/messages.
Like in the assignment from TD#5, we provided you with the mock storage service for users,
it is the node.js module found under `stores/user.js`.


## Pre-requisites
### Install `Node.js` and `npm` on your system.
To install on Ubuntu:
```
sudo apt-get install nodejs npm
```
To install on Windows or Mac OS X:
Refer to <https://nodejs.org/en/> for packaged installers.

### Use `npm` to install dependencies (include `Express`)
```
cd path/to/clonned/git/repo
npm install
```

## How to run:
```
node app.js
```
On Ubuntu:
```
nodejs app.js
```

