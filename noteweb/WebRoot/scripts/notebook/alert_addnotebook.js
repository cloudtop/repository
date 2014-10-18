$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/noteserver/NoteBook/findAllNoteBook",
		success:function(data){
			if(data!=""){	
				var list = data.data;
				for(var i=0;i<list.length;i++){
					
					$("#lists").append(
							"<li class='notebookonline' id='"+list[i].notebookId+"'><a ><i class='fa fa-book' title='online'rel='tooltip-bottom'></i>"+list[i].notebookName+"</a><button type='button'   class='deletenotebook' id='add_notebook'><i class='fa fa-times'></i></button></li>"		
							);
				};
				$(".notebookonline").dblclick(function(){
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
				$(".notebookonline").click(function(e){
					var notebookId = $(this).attr("id");
					$("#notebookId").val(notebookId);
					$("#notelist").html("<li class='online'><a  class='checked'><i class='fa fa-file-text-o' title='online' rel='tooltip-bottom'></i> 使用Java操作符<button type='button' class='btn btn-default btn-xs btn_position btn_slide_down'><i class='fa fa-chevron-down'></i></button></a><div class='note_menu' tabindex='-1'><dl><dt><button type='button' class='btn btn-default btn-xs btn_move' title='移动至...'><i class='fa fa-random'></i></button></dt><dt><button type='button' class='btn btn-default btn-xs btn_share' title='分享'><i class='fa fa-sitemap'></i></button></dt><dt><button type='button' class='btn btn-default btn-xs btn_delete' title='删除'><i class='fa fa-times'></i></button></dt></dl></div></li>");
					$.ajax({
						type:"post",
						url:"http://localhost:8080/noteserver/note/findAllNote",
						data:"notebookId="+notebookId,
						success:function(data){
							var list = data.data;
							for(var i=0;i<list.length;i++){					
								$("#notelist").append(
								"<li class='online'><a  ><i class='fa fa-file-text-o' title='online' rel='tooltip-bottom'></i> "+list[i].noteTitle+"<button type='button' class='btn btn-default btn-xs btn_position btn_slide_down'><i class='fa fa-chevron-down'></i></button></a><div class='note_menu' tabindex='-1'><dl><dt><button type='button' class='btn btn-default btn-xs btn_move' title='移动至...'><i class='fa fa-random'></i></button></dt><dt><button type='button' class='btn btn-default btn-xs btn_share' title='分享'><i class='fa fa-sitemap'></i></button></dt><dt><button type='button' class='btn btn-default btn-xs btn_delete' title='删除'><i class='fa fa-times'></i></button></dt></dl></div></li>"
										);
							}	
							
						}
					});
				});
				$(".deletenotebook").click(function(e){
					e.stopPropagation();//取消事件冒泡
					var notebookid=$(this).parent().attr("id");
					$("#can").load("alert/alert_delete_notebook.html",function(){
						$("#can").show();
						$(".close").click(function(){
							$("#can").hide();
						});
						$("#close").click(function(){
							$("#can").hide();
						});
						$("#deletenotebook").click(function(){
									$("#can").hide();
									$.ajax({
										url:"http://localhost:8080/noteserver/NoteBook/delete",
										type:"post",
										data:"notebookid="+notebookid,
										success:function(data){
											if(data.status=="1"){
												alert(data.message);
											}
											if(data.status=="0"){
												$("#lists").html("<li class='notebookonline'><a  class='checked'><i class='fa fa-book' title='online' rel='tooltip-bottom'></i>默认笔记本</a><button type='button'   class='deletenotebook' id='add_notebook'><i class='fa fa-times'></i></button></li>");
												$.ajax({
													type:"get",
													url:"http://localhost:8080/noteserver/NoteBook/findAllNoteBook",
													success:function(data){
														var list = data.data;
														for(var i=0;i<list.length;i++){					
															$("#lists").append(
																	"<li class='notebookonline'><a ><i class='fa fa-book' title='online'rel='tooltip-bottom'></i>"+list[i].notebookName+"</a><button type='button'   class='deletenotebook' id='add_notebook'><i class='fa fa-times'></i></button></li>"
																	);
														}	
														
													}
												});
											}
										}
									});
						});
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
$("#rollback_button").click(function(){//查看某笔记本的回收站笔记
		$("#notelist").html("");
		$("#pc_part_2").css("display","none");
		$("#pc_part_4").css("display","block");
		var notebookId=$("#notebookId").val();
		
		$("#recycle").html("<li class='disable'><a ><i class='fa fa-file-text-o' title='online' rel='tooltip-bottom'></i> 虚假回收站笔记<button type='button' class='btn btn-default btn-xs btn_position btn_delete'><i class='fa fa-times'></i></button><button type='button' class='btn btn-default btn-xs btn_position_2 btn_replay'><i class='fa fa-reply'></i></button></a></li>");
		$.ajax({
			type:"post",
			url:"http://localhost:8080/noteserver/note/findDeleteNote",
			data:"notebookId="+notebookId,
			success:function(data){
				var list = data.data;
				for(var i=0;i<list.length;i++){					
					$("#recycle").append(
							"<li class='disable'><a ><i class='fa fa-file-text-o' title='online' rel='tooltip-bottom'></i>"+list[i].noteTitle+"<button type='button' class='btn btn-default btn-xs btn_position btn_delete'><i class='fa fa-times'></i></button><button type='button' class='btn btn-default btn-xs btn_position_2 btn_replay'><i class='fa fa-reply'></i></button></a></li>"
							);
				}	
				
			}
		});
	});
	
	
	

	
});
