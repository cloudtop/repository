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
				$("#can").hide();
				//遍历数据库中的笔记本
				$("#lists").html("<li class='online'><a  class='checked'><i class='fa fa-book' title='online' rel='tooltip-bottom'></i> 默认笔记本</a></li>");
				$.ajax({
					type:"get",
					url:"http://localhost:8080/testNoteServer/NoteBook/findAllNoteBook",
					success:function(data){
						if(data!=""){	
							var list = data.data;
							for(var i=0;i<list.length;i++){					
								$("#lists").append(
										"<li class='online'><a ><i class='fa fa-book' title='online'rel='tooltip-bottom'></i>"+list[i].notebookName+"</a></li>"
										);
							}	
							}
					}
				});
			}
		}
	});		
}