$(document).ready(function(){
  $("button").click(function(){
    var value = $("input").val();
    var url = "http://accesscontrolalloworiginall.herokuapp.com/https://api.spotify.com/v1/tracks/1zHlj4dQ8ZAtrayhuDDmkY?market=ES"

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
    })
    .done(function(response){
      console.log(response);
    })
    .fail(function(response){
      console.log("failedddd",response);
    })
    .always(function(response){
      console.log("DOING SOMETHING");
    })
  });
});
