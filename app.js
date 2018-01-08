//create city objects
const SF = {
  name: "San Francisco",
  woeid: 2487956
}
const SAC = {
  name: "Sacramento",
  woeid: 2486340
}
const SJ = {
  name: "San Jose",
  woeid: 2488042
}
const LA = {
  name: "Los Angeles",
  woeid: 2442047
}
const SD = {
  name: "San Diego",
  woeid: 2487889
}
var cities = [SF, SAC, SJ, LA, SD];

//helper method for making url
var makeURL = function (id) {
  var start = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20";
  var end = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  var url =  start + id.toString() + end;
  return url;
};

//get temperature and set it on webpage
var setTemp = function (name, url) {
  $.getJSON(url, function (data){
    var info = data.query.results.channel.item.condition.temp;
    console.log(info);
    name.temp = info;

    $li = $("<li>");
    $li.css("font-size", "50px");
    $li.text(name.name);

    $div = $("<div>");
    //console.log(element.temp);
    $div.css("font-size", "30px");
    $div.append("Temperatue: ");
    $div.append(info);

    $li.append($div);
    $(".cities").append($li);
  });
};

//iterate through cities and call methods
var main = function() {
  cities.forEach( function (element) {
    var url = makeURL(element.woeid);
    setTemp(element, url);
  });
}

$(document).ready(main);
