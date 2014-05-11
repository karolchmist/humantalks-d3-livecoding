var width = 960,
    height = 500;

var random=function(max) {
    return Math.round(max * Math.random());
};

var data = [];
for(var i = 0; i<20; i++) {
    data.push(random(30));
}

var scale = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 500]);

var content = d3.select("body")
    .select("div#content");

var bars = content.selectAll("div")
    .data(data)
    ;

    bars.enter()
        .append("div")
        .text(function(d){return d;})
        .style("background-color", "red")
        .style("width", function(d){return scale(d) + "px";})
    ;

    bars.exit().remove();