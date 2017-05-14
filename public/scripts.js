menuItems = document.getElementsByClassName("menu-item");
menuItemTextDivs = document.getElementsByClassName("menu-item-text-div");


Array.prototype.forEach.call(menuItems, function(photo, index){
	photo.addEventListener("mouseenter", function(){
		photo.classList.add("menu-item-shadow");
		setTimeout(function(){menuItemTextDivs[index].style.display = "none"}, 800);

	})
	photo.addEventListener("mouseleave", function(){
		photo.classList.remove("menu-item-shadow");
		setTimeout(function(){ menuItemTextDivs[index].style.display = "block"}, 800);
	})
})
