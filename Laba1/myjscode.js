// = document.getElementById("navLi1");
var navmenu = document.getElementsByTagName("nav")[0]
var navlist = navmenu.getElementsByTagName("li");
var main_id = document.querySelector("main").id;
var menuelem;

if (main_id == "index"){
	menuelem = navlist[0];
}
else if (main_id == "chat"){
	menuelem = navlist[1];
}
else if (main_id == "orkii"){
	menuelem = navlist[2];
}
else if (main_id == "beige"){
	menuelem = navlist[3];
}
else if (main_id == "about_us"){
	menuelem = navlist[4];
	
	$(document).ready(function() {
		$(".hidebox p").hide();
		$(".hidebox h2").css("background-color", "#1da1f2");
	});
}

menuelem.classList.add("active");


$(".hidebox h2").click(function() {
	console.log($(this).children()[0]);
	if ($(this).children().css('display') == 'none'){
		console.log("1");
		$(this).children().show("slow");
		$(this).css("background-color", "#f3f3f3");
	}
	else{
		console.log("2");
		$(this).children().hide("slow");
		$(this).css("background-color", "#1da1f2");
	}
});
/*
$(document).click(function() {
	if ($('.hidebox p').css('display') == 'none'){
		$(".hidebox p").show("slow");
		$(".hidebox h2").css("background-color", "#1da1f2");
	}
	else{
		$(this).next("p").hide("slow");
		$(this).css("background-color", "#29c5e6");
	}
});
*/