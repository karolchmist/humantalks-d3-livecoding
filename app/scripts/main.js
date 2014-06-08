var width = 960,
    height = 500;

var random=function(max) {
    return Math.round(max * Math.random());
};

var data = [];

fillData();

var svg = d3.select('#content').append('svg');

var circles = svg.selectAll('circle').data(data);

circles
    .enter()
    .append("circle")
    .attr('r', function(d){return d.r;})
    .attr('cx', function(d){return d.cx;})
    .attr('cy', function(d){return d.cy;})
    .attr('fill', function() { return "rgb("+ random(255)+","+ random(255)+","+ random(255)+")";})
;


function fillData () {
    data = [];
    for(var i = 0; i < 200; i++) {
        data.push({
            r:random(9)+1,
            cy:random(height),
            cx:random(width)
        });
    }
}

setInterval(function() {
    console.log("refreshing");

    fillData();

    circles.data(data)
        .transition()
        .attr('r', function(d){return d.r;})
        .attr('cx', function(d){return d.cx;})
        .attr('cy', function(d){return d.cy;})
    ;

}, 1000);