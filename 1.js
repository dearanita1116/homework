function test()
{

		circleRadii = [40, 20, 10];
		function hiD3(hi) {
			var svgContainer = d3.select("body").append("svg")
								.attr("width", 600)
								.attr("height", 100);
			var circles = svgContainer.selectAll("circle")
								.data(circleRadii)
								.enter()
								.append("circle");
			var circleAttributes = circles
								.attr("cx", 60)
								.attr("cy", 60)
								.attr("r", function(d) { return d; })
								.style("fill", function(d) {
									var returnColor;
									if (d === 40) { 
										returnColor = "pink";
									} else if (d === 20) {
										returnColor = "lightblue";
									} else if (d === 10) {
										returnColor = "lightyellow";
									}
									return returnColor;
								});
		}

		hiD3();

		//The data for our line
		var lineData = [ 
			];
		function lineTest(hi)
		{
		}
		lineTest(lineData);
		//d3.json(,lineTest);
	}