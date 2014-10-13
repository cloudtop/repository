function addnotebook(notebookname){
	$.ajax({
		url:"http://localhost:8080/testNoteServer/NoteBook/add",
		type:"post",
		data:{"notebookname":notebookname},
		success:function(data){
			if(data.status=="1"){
				
				$("#tip").html(data.message);
			}
			else if(data.status=="0"){
				//遍历数据库中的笔记本
				$("#can").hide();
				$("#lists").empty();
				$.ajax({
					type:"get",
					url:"http://localhost:8080/testNoteServer/NoteBook/findAllNoteBook",
					success:function(data){
						if(data!=""){			
							for(i=0;i<data.length;i++){
								var n = data.data[i];
								$("#lists").append(
										"<li class='online'><a  class='checked'><i class='fa fa-book' title='online'rel='tooltip-bottom'></i>"+s.notebookName+"</a></li>"
										);
							}	
							}
					}
				});
			}
		}
	});		
}