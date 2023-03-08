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
}

menuelem.classList.add("active");