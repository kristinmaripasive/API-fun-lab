$(document).ready(function(){

  $("button").click(function(){
    var value = $("input").val();
    var url = "https://www.omdbapi.com/?t="+value

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
    })
    .done(function(response){
      console.log(response);

  //refers to the objects in the API and places them in each made variable
  var picture = "<img class='picture' src = '"+ response.Poster +"'>";
  var title = "<h1>"+ response.Title + "</h1>";
  var rate = "<p>"+ response.Rated + "</p>";
  var year = "<p>"+ response.Year + "</p>";
  var plot = "<p>"+ response.Plot + "</p>";

//append picture to html
  $(picture).appendTo($(".picture"));

//append responses to html
  $(title).appendTo($(".content"));
  $(rate).appendTo($(".content"));
  $(year).appendTo($(".content"));
  $(plot).appendTo($(".content"));

    })
    .fail(function(response){
      console.log("failedddd",response);
    })
    .always(function(response){
      console.log("DOING SOMETHING");
    })

  });
});
