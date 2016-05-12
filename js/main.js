
$(document).ready(function(){
	$(".casilla").on("click",function(e){
		$(this).html("x")
	});
	$(".casilla").on("dblclick",function(e){
		$(this).html("o")
	});
	$(".reset").on("click",function(e){
		$(".casilla").html("")
	});

	
	
});

var x1=$("#x1").text()
	var x2=$("#x2").text()
	if(x1==x2 )
		alert("Hola");
