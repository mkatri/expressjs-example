var idGenerator = require('./id_generator.js');

var UserStore = function() {
	this.users = {};
};

UserStore.prototype.getAll = function(callback) {
	var userArray = new Array();
	for(var userId in this.users) {
		userArray.push(this.users[userId]);
	}
	callback(userArray);
};

UserStore.prototype.get = function(id, callback) {
	var error = !(id in this.users);
	callback(this.users[id], error);
};

UserStore.prototype.save = function(user, callback) {
	var newUser = !("id" in user);
	if (newUser) {
		user.id = idGenerator.next();
	}
	this.users[user.id] = user;
	var error = false;
	callback(this.users[user.id], error);
}

UserStore.prototype.delete = function(user, callback) {
	var error = !("id" in user) || !(user.id in this.users);
	if (!error) {
		delete this.users[user.id];
	}
	callback(user, error);
};
	
module.exports = new UserStore();
