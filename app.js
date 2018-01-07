var main = function () {
  console.log("Hello World!");
  var SAC = 2486340;
  var url="https://weather-ydn-yql.media.yahoo.com/forecastrss?w=2486340";
  url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  $.getJSON(url, function (data) {

    var temp = data.query.results.channel.item.condition.temp;
    console.log(temp);
    
  });
};
$(document).ready(main);
