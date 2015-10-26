var Generator = function() {
	this.id = 0;
};

Generator.prototype.next = function() {
	return this.id++;
};

module.exports = new Generator();
