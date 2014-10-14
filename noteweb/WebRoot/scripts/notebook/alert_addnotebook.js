$(function(){
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
				};
				$("li").dblclick(function(){
					var prename = $(this).text();
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
								url:"http://localhost:8080/testNoteServer/NoteBook/updataNoteBookName",
								type:"post",
								data:{"prename":prename,"newname":newname},
								success:function(data){
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
							});
							
						})
					});
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
	

	
})

