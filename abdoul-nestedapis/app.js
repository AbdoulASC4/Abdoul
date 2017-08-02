var randUser = 'https://randomuser.me/api/'

$.ajax({
  url:randUser ,
  dataType: 'json',
  success: function(data) {
    console.log(data);
    var start = data.results[0]
    var userFirstName = start.name.first;
    var userLastName = start.name.last;
    var userTitle = start.name.title;
    var pic = start.medium;
    $("body").append("<h1> "+userTitle+" "+userFirstName+" "+userLastName+"" +pic+" </h1>");
  }
});