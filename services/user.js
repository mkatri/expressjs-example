var userStore = require('../stores/user.js');

module.exports.LinkApp = function(app) {
	app.get('/api/users', function(req, res) {
		userStore.getAll(function(users) {
			res.json(users);
		});
	});

	app.get('/api/users/:id', function(req, res) {
		var userId = req.params.id;
		userStore.get(userId, function(user, error) {
			if (error) return res.sendStatus(400);
			res.json(user);
		});
	});

	app.post('/api/users', function(req, res) {
		var user = req.body;
		if (!user) return res.sendStatus(400);
		userStore.save(user, function(user, error) {
			if (error) return res.sendStatus(400);
			res.json(user);
		});
	});

	app.put('/api/users/:id', function(req, res) {
		var userId = req.params.id;
		var userUpdate = req.body;
		if (!userUpdate) return res.sendStatus(400);
		userStore.get(userId, function(user, error) {
			if (error) return res.sendStatus(400);
			userUpdate.id = user.id;
			userStore.save(userUpdate, function(user, error) {
				if (error) return res.sendStatus(400);
				res.json(user);
			});
		});
	});

	app.delete('/api/users/:id', function(req, res) {
		var userId = req.params.id;
		userStore.get(userId, function(user, error) {
			if (error) res.sendStatus(400);
			userStore.delete(user, function(user, error) {
				if (error) return res.sendStatus(400);
				res.json(user);
			});
		});
	});
};
