

//navbar section

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")
    }
}

//navbar hide

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


//counter section

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range= end - start,
        incerement = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current+=incerement;
            obj.textContent=current;
            if(current == end){
                clearInterval(timer);
            }
        },step)
    }
    counter("count1", 0, 1245, 3000);
    counter("count2", 0, 2435, 2000);
    counter("count3", 500, 4245, 3000);
    counter("count4", 0, 7245, 3000);
})