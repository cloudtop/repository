$(function(){
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

