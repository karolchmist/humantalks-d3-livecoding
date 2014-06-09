var width = 960,
    height = 500;

var random = function(max) {
    return Math.round(max * Math.random());
};

var randomColor = function() {
    return random(250);
};


var createData = function() {
    var data = [];
    for(var i = 0; i < 200; i++) {
        data.push({
            r:random(9)+1,
            cy:random(height),
            cx:random(width)
        });
    }
    return data;
};

var svg = d3.select("#content").append("svg");

var circles = svg.selectAll("circle").data(createData());

circles
    .enter()
    .append("circle")
    .attr("r", function(d) {return d.r + "px";})
    .attr("cx", function(d) {return d.cx;})
    .attr("cy", function(d) {return d.cy;})
    .attr("fill", function() {return "rgb("+randomColor()+","+randomColor()+","+randomColor()+")";})
;

setInterval(
    function() {
        console.log("refreshing");

        circles
            .data(createData())
            .transition()
            .attr("r", function(d) {return d.r + "px";})
            .attr("cx", function(d) {return d.cx;})
            .attr("cy", function(d) {return d.cy;})
        ;
    },
    1000
);