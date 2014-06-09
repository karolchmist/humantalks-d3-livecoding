var width = 960,
    height = 500;

var random = function(max) {
    return Math.round(max * Math.random());
};

var randomColor = function() {
    return "rgb("+random(250)+","+random(250)+","+random(250)+")";
};

var createData = function() {
    var data = [];
    for(var i = 0; i < 100; i++) {
        data.push({
            r:random(20)+10,
            cy:random(height-30)+30,
            cx:random(width-30)+30
        });
    }
    return data;
};

var svg = d3.select("#content").append("svg");

var circles = svg.selectAll("circle").data(createData());

circles.enter().
    append("circle")
    .attr("r", function(d) { return d.r;})
    .attr("cy", function(d) { return d.cy;})
    .attr("cx", function(d) { return d.cx;})
    .attr("fill", randomColor)
;

setInterval(
    function() {
        circles.data(createData())
            .transition()
            .duration(1000)
            .attr("r", function(d) { return d.r;})
            .attr("cy", function(d) { return d.cy;})
            .attr("cx", function(d) { return d.cx;})
        ;
    },
    3000
);