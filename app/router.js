module.exports = function(app, config) {


    app.get('/', function(req, res) {
    	res.send("");
    });

    app.get('/api/get/:node', function(req, res) {
        var node = req.params.node;
        if(!!config.nodes[node]) {
            res.send(config.nodes[node]);
        }
        else {
            res.send({"error":"not_found"});
        }
    });

    app.get('/api/get/:node/:app', function(req, res) {
        res.send([req.params.node, req.params.app]);
    });
}

