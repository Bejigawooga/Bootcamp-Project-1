
//pulls information from the form and build the query URL

function buildQueryURL() {
    let queryURL = "";
    var queryParams = { "api-key": "" };





      // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
//d
  
}


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#movies-view").text(JSON.stringify(response));
  });
