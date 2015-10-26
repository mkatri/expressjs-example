var idGenerator = require('./id_generator.js');

var TodoStore = function() {
	this.todos = {};
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
