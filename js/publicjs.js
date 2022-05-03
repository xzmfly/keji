$(function(){

	var url=document.URL.split("/")[document.URL.split("/").length-1];	
	$(".header .nav li a[href='"+url+"']").parent("li").addClass("on");		
	if(url.length<=0){
		$(".header .nav li:first-child").addClass("on");	
	}	


	
	//头部导航菜单
	$(".header .menu").click(function(){
		$(".header .nav").slideToggle();
		
	})	
	
	
	var winW=$(window).width();	
	$(window).resize(function(){
		winW=$(window).width();
		if(winW>=992){
			$(".header .nav,.header .search").show();			
		}else{
			$(".header .nav,.header .search").hide();	
		}
	
	})
			

	
})