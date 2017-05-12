menuItemContainers = document.getElementsByClassName("menu-item-container");


// [].forEach.call(menuPhotos, function(photo){
// 	photo.addEventListener("hover", function(){
// 		photo.classList.add("menu-item-enlarged");
// 	})
// })

Array.prototype.forEach.call(menuItemContainers, function(photo){
	photo.addEventListener("mouseenter", function(){
		photo.classList.toggle("menu-item-overlay");
	})
	photo.addEventListener("mouseleave", function(){
		photo.classList.toggle("menu-item-overlay");
	})
})