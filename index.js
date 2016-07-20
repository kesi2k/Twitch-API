var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "ESL_SC2","pokercentral", "Makesi"];

var channelList = "";
var channelOff = "";
var channelOn = "";

function channelInfo() {
  for (var i = 0; i < users.length; i++) {
    (function(i) {

      $.getJSON('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=?', function(data) {

        if (data.stream === null) {
          // console.log(users[i]);  
          channelOff = channelOff + "<div class = 'results_fo'><a href= 'http://www.twitch.tv/" + users[i] + "'target = '_blank'><h1>" + users[i] + "</h1><p>" + "Offline" + "</p></a></div>";
          channelList = channelList + "<div class = 'results_fo'><a href= 'http://www.twitch.tv/" + users[i] + "'target = '_blank'><h1>" + users[i] + "</h1><p>" + "Offline" + "</p></a></div>";
          document.getElementById("Channels").innerHTML = channelList;
        } else if (data.stream === undefined) {
          channelList = channelList + "<div class = 'results_fo'><h1>" + users[i] + "</h1><p>" + "Not available" + "</p></div>";

        } else {
          channelOn = channelOn +  "<div class = 'results_fo'><a href= 'http://www.twitch.tv/" + users[i] + "'target = '_blank'><h1>" + users[i] + "</h1><p>" + data.stream.channel.status + "</p></a></div>";
          channelList = channelList +  "<div class = 'results_fo'><a href= 'http://www.twitch.tv/" + users[i] + "'target = '_blank'><h1>" + users[i] + "</h1><p>" + data.stream.channel.status + "</p></div>";
          document.getElementById("Channels").innerHTML = channelList;
        }

        //console.log(data.url);
        //console.log(data._links.channel) //LINK TO CHANNEL STREAM
        // console.log(data.stream)
        // console.log(data.stream.channel.status) // Content of Channel

      })
    })(i)
  }
}
$(document).ready(function() {
  // document.getElementById("Channels").innerHTML = "";
  channelInfo();
})
$("#Online").on("click", function() {
  document.getElementById("Channels").innerHTML = "";
  document.getElementById("Channels").innerHTML = channelOn;
});
$("#Offline").on("click", function() {
  document.getElementById("Channels").innerHTML = "";
  document.getElementById("Channels").innerHTML = channelOff;
});
$("#All").on("click", function() {
  document.getElementById("Channels").innerHTML = "";
  document.getElementById("Channels").innerHTML = channelList;
});