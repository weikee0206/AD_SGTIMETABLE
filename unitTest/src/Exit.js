function Exit() {
}


Exit.prototype.logout = function(userId) {
 var result = 'default';
	$.ajax({
   url: 'http://redian.io/timetable/cancelNotification.php',
type: "POST",
dataType:'json',
async: false,
data: {
userid: userId
},
    success: function (data) {
   result = true;
  },
   error: function (data) {
   result = false;
  }
});
return result;
};


