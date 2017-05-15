function testScroll(ev){
    if(window.pageYOffset>100){
    	document.getElementsByClassName("navigation")[0].className = "sticky-nav navigation";
    	document.getElementById("pageHolder").className = "sticky-page-holder";
    } else {
    	document.getElementsByClassName("navigation")[0].className = "navigation";
    	document.getElementById("pageHolder").className = "page-holder";
    }
}
window.onscroll=testScroll