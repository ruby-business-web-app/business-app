menuItemContainers = document.getElementsByClassName("menu-item-container");
menuItems = document.getElementsByClassName("menu-item");
menuItemTitles = document.getElementsByClassName("menu-item-title");
menuItemTexts = document.getElementsByClassName("menu-item-text");

addTextEventListeners();

Array.prototype.forEach.call(menuItems, function(photo){
	photo.addEventListener("mouseenter", function(){
		photo.classList.remove("menu-item-overlay");
		photo.classList.add("menu-item-shadow");
	})
	photo.addEventListener("mouseleave", function(){
		photo.classList.add("menu-item-overlay");
		photo.classList.remove("menu-item-shadow");
	})
})

function addTextEventListeners() {
	Array.prototype.forEach.call(menuItemTitles, function(title){
		title.addEventListener("mouseenter", function(){
			setTimeout(function(){title.style.display = "none"}, 1000);
		})
	})

	Array.prototype.forEach.call(menuItemTexts, function(text){
		text.addEventListener("mouseleave", function(){
			setTimeout(function(){text.style.display = "block"}, 1000);
		})
	})
}