let value=0;
let doc = document.documentElement;

let slider = document.querySelector("#cor");
slider.oninput = function() {
    document.documentElement.style.setProperty("--hue", this.value);
  }


window.addEventListener("scroll",onScroll);
window.addEventListener("scroll",function(){
    return value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
});

onScroll();

function onScroll(){
    showNavOnScroll();
    showBackToTopButtonOnScroll();
}

function showNavOnScroll(){
    if(scrollY>0){
        navigation.classList.add("scroll");    
    }else{
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY>200 && value<95){
        backToTopButton.classList.add("show");
        backToTopButton.classList.remove("show-contrast");    
    }else{
        backToTopButton.classList.remove("show");
    }

    if(value>=95){
        backToTopButton.classList.remove("show");
        backToTopButton.classList.add("show-contrast");    
    }else{
        backToTopButton.classList.remove("show-contrast");
    }
}

function openMenu(){
    document.body.classList.add("menu-expanded");
}

function closeMenu(){
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
    origin:"top",
    distance:"30px",
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card`);