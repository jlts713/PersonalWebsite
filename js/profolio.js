$(document).ready(function(){
	/*-----------------------------------------*/
	/* GENERAL
	/*-----------------------------------------*/
	//scroll page effect : require easing jquery 
	$(function(){
		$("a.scroll-page").bind("click", function(event){	//bind click event
			var $anchor = $(this);
			$("html, body").stop().animate({
				scrollTop: $($anchor.attr("href")).offset().top
			}, 1200, "easeInOutQuad");
			event.preventDefault(); 
		});
	});
	
	
	/*-----------------------------------------*/
	/* SECTION | ABOUT
	/*-----------------------------------------*/
	//Social icon hover effect	
	$("#inicon").bind("mouseenter",{iconId:"#inicon", icon:"inicon"} ,iconHoverIn);
	$("#inicon").bind("mouseleave",{iconId:"#inicon", icon:"inicon"} ,iconHoverOut);
	
	$("#giticon").bind("mouseenter",{iconId:"#giticon", icon:"giticon"} ,iconHoverIn);
	$("#giticon").bind("mouseleave",{iconId:"#giticon", icon:"giticon"} ,iconHoverOut);
});

	
function iconHoverIn(e){
	var id = e.data.iconId;
	var icon = e.data.icon;
	var srcUrl = "./img/about/"+icon+"_act.png";
	$(this).attr("src", srcUrl);
	
}

function iconHoverOut(e){
	var id = e.data.iconId;
	var icon = e.data.icon;
	var flatUrl = "./img/about/"+icon+"_flat.png";
	$(this).attr("src", flatUrl);
}