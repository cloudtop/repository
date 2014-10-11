function check(data,rename,repwd){
	if(data.status=="0"){		
		get('warning_1').style.display='block';
	}
	if(data.status!="0"){
		$.ajax({
			url:"http://localhost:8080/testNoteServer/regist",
			type:"post",
			beforeSend:function(xhr){
				var author=makeauth(rename,repwd);
				xhr.setRequestHeader("Authorization",author);
			},
			successful:function(data){
				
			}
			
		});
		window.location.href="log_in.html";
	}
}
