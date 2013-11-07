module.exports = function(app, config) {

	function getState() {
		if (this.num == undefined) {
			this.num = (this.num || 0) + 0;
		} 
		var ind = this.num;
		(this.num >= config.state.length-1) ? this.num = 0 : this.num = (this.num || 0) + 1;
		return config.state[ind]
	}

    app.get('/api/getstate', function(req, res) {
    	res.send(getState());
    });

    app.get('/api/all', function(req, res) {
    	res.send(config.state);
    });
}

