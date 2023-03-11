// Выделяем пункт навигационного меню в зависимости от id элемента <main>
var main_id = document.querySelector("main").id;
var navmenu = document.getElementsByClassName("top-menu")[0]
var navlist = navmenu.getElementsByTagName("li");
var headtext = document.getElementById("headname");
var menuelem;
var alerttext = "";

switch(main_id) {
	case 'HOME':
		menuelem = navlist[0];
		break;
	case 'CONTACT':
		menuelem = navlist[5];
		break;
	default:
		menuelem = navlist[0];
}
headtext.innerHTML = menuelem.firstChild.innerHTML;
menuelem.classList.add("active");
//

/*$(document).ready(function() {
	$(".hidebox p").hide();
	$(".hidebox h3").css("background-color", "#29c5e6");
});*/
$(".hidebox h3").click(function () {
	$(this).next("p").hide("slow");
	$(this).css("background-color", "#29c5e6");
});
$(".hidebox h3").dblclick(function () {
	$(this).next("p").show("slow");
	$(this).css("background-color", "#e7e7e7");
});

/*function setHeaderText(elem) {
	var newheadtext = elem.innerHTML;
	var headtext = document.getElementById("headname");
	headtext.innerHTML = newheadtext;
	elem.parentNode.classList.add("active");
}*/