$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/noteserver/NoteBook/findAllNoteBook",
		success:function(data){
			if(data!=""){	
				var list = data.data;
				for(var i=0;i<list.length;i++){
					
					$("#lists").append(
							"<li class='notebookonline' id='"+list[i].notebookId+"'><a ><i class='fa fa-book' title='online'rel='tooltip-bottom'></i>"+list[i].notebookName+"</a><button type='button'   class='sd' id='add_notebook'><i class='fa fa-times'></i></button></li>"		
							);
					$("li").dblclick(function(){
						var notebookId = $(this).attr("id");
						$("#can").load("alert/alert_rename.html",function(){
							$("#can").show();
							$(".close").click(function(){
								$("#can").hide();
							});
							$("#cancle").click(function(){
								$("#can").hide();
							});
							$("#updata").click(function(){
								var newname = $("#input_notebook_rename").val();
								$.ajax({
									url:"http://localhost:8080/noteserver/NoteBook/updataNoteBookName",
									type:"post",
									data:{"notebookId":notebookId,"newname":newname},
									success:function(data){
											$("#can").hide();
											window.location.href="edit.html";
									}
								});
								
							});
						});
					});
					
				};
				$(".sd").click(function(){
					$("#can").load("alert/alert_delete_notebook.html");
				});
			};
		}
	});
	
	$("#add_notebook").click(function(){
		$("#can").load("alert/alert_notebook.html",function(){
			$("#can").show();
			$(".close").click(function(){
				$("#can").hide();
			});
			
			$("#close").click(function(){
				$("#can").hide();
			});
			
			$("#create").click(function(){
				var notebookname=$("#input_notebook").val();
				addnotebook(notebookname);
			});
		});
		
	});
	
	
	

	
});

