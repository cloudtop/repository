$(function(){
	$("#regist_button").click(function(){
		var reusername = $("#regist_username").val();
		var renickname = $("#nickname").val();
		var repwd = $("#regist_password").val();
		var refnpwd = $("#final_password").val();
		var flag=true;
		if(reusername==""){
			flag=false;
		}
		if(renickname==""){
			flag=false;
		}
		if(repwd==""){
			flag=false;
		}
		if(refnpwd==""){
			flag=false;
		}
		if(flag){
			checkRegist(reusername,repwd);	
		}
	
	});
});