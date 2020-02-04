// from data.js
var tableData = data;
// console.log(tableData)

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        console.log(key, value)
        row.append("td").text(value);   
    });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    tbody.html("");

    var inputDate = d3.select("#input");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    
	// // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    var row = tbody.append("tr");
    Object.entries(selections).forEach(([key, value]) => {
        console.log(key, value)
        row.append("td").text(value);
    });
  });
});

