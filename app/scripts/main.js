var width = 500,
    height = 500;

var random=function(max) {
    return Math.round(max * Math.random());
};

var data = [];
for(var i = 0; i<300; i++) {
    data.push({x:random(100), y:random(100), r:random(15)});
}

var scale = d3.scale.linear()
    .domain([0,100])
    .range([1, width])
    ;

var svg = d3.select("#content").append("svg");
var circles = svg.selectAll("circle").data(data);

circles.enter()
    .append("circle")
    .attr("cx", function(d) {return scale(d.x);})
    .attr("cy", function(d) {return scale(d.y);})
    .attr("r", function(d) {return d.r;})
;