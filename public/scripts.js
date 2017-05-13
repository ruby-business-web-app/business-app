menuItemContainers = document.getElementsByClassName("menu-item-container");
menuItems = document.getElementsByClassName("menu-item");
menuItemTitles = document.getElementsByClassName("menu-item-title");
menuItemTexts = document.getElementsByClassName("menu-item-text");
menuItemTextDivs = document.getElementsByClassName("menu-item-text-div");


Array.prototype.forEach.call(menuItems, function(photo){
	photo.addEventListener("mouseenter", function(){
		photo.classList.add("menu-item-shadow");
	})
	photo.addEventListener("mouseleave", function(){
		photo.classList.remove("menu-item-shadow");
	})
})

Array.prototype.forEach.call(menuItems, function(item, index){
	menuItemTextDivs[index].addEventListener("mouseenter", function(){
		menuItemTextDivs[index].style.display = "none";
	});
	item.addEventListener("mouseleave", function(){
		setTimeout(function(){ menuItemTextDivs[index].style.display = "block"}, 1000);
	});
})