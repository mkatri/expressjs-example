var idGenerator = require('./id_generator.js');

var TodoStore = function() {
	this.todos = {};

	// Pre-initialized store with fake lists
	this.todos["fake1"] = {
		"items":[
			{"done":true,"message":"Test Item1"},
			{"done":false,"message":"Test item2"}
		],
		"id": "fake1"
	};

	this.todos["fake2"] = {
		"items":[],
		"id": "fake2"
	};
};

TodoStore.prototype.getAll = function(callback) {
	var todoArray = new Array();
	for(var listId in this.todos) {
		todoArray.push(this.todos[listId]);
	}
	callback(todoArray);
};

TodoStore.prototype.get = function(id, callback) {
	callback(this.todos[id], !(id in this.todos));
};

TodoStore.prototype.save = function(list, callback) {
	var newList = !("id" in list);
	if (newList) {
		list.id = idGenerator.next();
	}
	this.todos[list.id] = list;
	callback(this.todos[list.id], false);
}

module.exports = new TodoStore();
