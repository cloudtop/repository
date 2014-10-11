function checkRegist(rename,repwd){
	$.ajax({
		url:"http://localhost:8080/testNoteServer/login/checklogin",
		type:"post",
		beforeSend:function(xhr){
			var author = makeauth(rename,repwd);
			xhr.setRequestHeader("Authorization",author);
			
		},
		success:function(data){
			check(data,rename,repwd);
		}
	});
}

function makeauth(user,password){
	var token = user+":"+password;
	var hash = Base64.encode(token);
	return "Basic "+hash;
}