let topmenu = document.getElementsByClassName('topmenu')[0];

function toggleMenu() {
	if(topmenu.className==="topmenu"){
		topmenu.className+=" open";
	} else{
		topmenu.className = "topmenu";
	}
}