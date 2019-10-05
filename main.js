var topButton = document.getElementById("topButton");
function scrollFunction(){
    var h = window.innerHeight;
    var scrollTop = window.pageYOffset
    
    if(scrollTop > h){
        topButton.classList.add("show")
    }
    else{
        topButton.classList.remove("show");
    }
}