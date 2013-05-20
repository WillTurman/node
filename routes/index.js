
/*
 * GET home page.
 */

var color = "#6DADE5";
var width = "100px";

var standings = [];

standings.push({
	team: "Giants",
	wins: 27
});

standings.push({
	team: "Diamondbacks",
	wins: 27
});

exports.index = function(req, res){
  res.render('index', { title: 'Express', 
  						standings: JSON.stringify(standings), 
  						color: JSON.stringify(color),
  						d3width: JSON.stringify(width) });
}; 