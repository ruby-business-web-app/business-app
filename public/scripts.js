// menuItemContainers = document.getElementsByClassName("menu-item-container");
// menuItemTitles = document.getElementsByClassName("menu-item-title");
// menuItemTexts = document.getElementsByClassName("menu-item-text");
menuItems = document.getElementsByClassName("menu-item");
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
		setTimeout(function(){menuItemTextDivs[index].style.display = "none"}, 800);
	});
	item.addEventListener("mouseleave", function(){
		setTimeout(function(){ menuItemTextDivs[index].style.display = "block"}, 800);
	});
})