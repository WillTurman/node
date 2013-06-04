
/*
 * GET home page.
 */

var pg = require('pg').native; 
var connection = "postgres://postgres:db@localhost:5432/gbdb";

var client = new pg.Client(connection);
client.connect();
var query = client.query("SELECT * FROM standings2013");

console.log(query.text);

query.on('row', function(row) {
	console.log(row.date);
	standings.push(row);
})

query.on('end', function() {
	client.end();
})

var color = "#6DADE5";
var width = "100px";

var standings = [];



exports.index = function(req, res){
  res.render('index', { title: 'Express', 
  						standings: JSON.stringify(standings), 
  						color: JSON.stringify(color),
  						d3width: JSON.stringify(width) });
}; 