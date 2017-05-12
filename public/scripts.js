menuPhotos = document.getElementsByClassName("menu-item");


[].forEach.call(menuPhotos, function(photo){
	photo.addEventListener("hover", function(){
		photo.classList.add("menu-item-enlarged");
	})
})