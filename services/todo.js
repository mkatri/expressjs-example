var todoStore = require('../stores/todo.js');

module.exports.LinkApp = function(app) {
	app.get('/api/todo-lists', function(req, res) {
		todoStore.getAll(function(todos) {
			res.json(todos);
		});
	});

	app.get('/api/todo-lists/:id', function(req, res) {
		var listId = req.params.id;
		todoStore.get(listId, function(list, error) {
			if (error) return res.sendStatus(400);
			res.json(list);
		});
	});

	app.post('/api/todo-lists', function(req, res) {
		var list = req.body;
		if (!list) return res.sendStatus(400);
		todoStore.save(list, function(list, error) {
			if (error) return res.sendStatus(400);
			res.json(list);
		});
	});

	app.put('/api/todo-lists/:id', function(req, res) {
		var listId = req.params.id;
		var listUpdate = req.body;
		if (!listUpdate) return res.sendStatus(400);
		todoStore.get(listId, function(list, error) {
			if (error) return res.sendStatus(400);
			listUpdate.id = list.id;
			todoStore.save(listUpdate, function(list, error) {
				if (error) return res.sendStatus(400);
				res.json(list);
			});
		});
	});
};
