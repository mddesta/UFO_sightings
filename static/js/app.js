//refrence to the tbody in the html file
var tbody = d3.select("tbody");
//Loop through the data and enter to table
data.forEach(item => {
    var row= tbody.append("tr");
    Object.entries(item).forEach(([key,value])=>{
        var cell=row.append("td")
        cell.text(value)
    });
});
var inputfield=d3.select("#datetime");
var submit=d3.select("#filter-btn");
submit.on("click",function() {
    d3.event.preventDefault();
    var dateinput=inputfield.property("value");
        tbody.html("");
        filteredData=data.filter(instance=> instance.datetime===dateinput);
        console.log(filteredData)
        filteredData.forEach(item => {
            var row= tbody.append("tr");
            Object.entries(item).forEach(([key,value])=>{
                var cell=row.append("td");
                cell.text(value);
            });
        })
})


