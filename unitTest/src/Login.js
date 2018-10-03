function Login() {
}



Login.prototype.submit = function(moduleCodeId) {
	var result = 'default';
	$.ajax({
    url: 'http://redian.io/timetable/newUser-t.php',
type: "POST",
dataType:'json',
async: false,
data: {
username: 'UnitTest',
moduleId: moduleCodeId
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


