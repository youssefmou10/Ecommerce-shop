
//slection navbar
const nav =document.getElementById("nav");

// slection bar 
const bar = document.getElementById("bar");
const bag=document.getElementById("bag");

if(bar){
   bar.addEventListener('click',()=>{
        bag.style.display="none";
        nav.classList.add("active");
        //slection shop bag 
    });
}
const close=document.getElementById("close");
if(close){
    close.addEventListener('click',()=>{
        bag.style.display="inline";
        nav.classList.remove("active")
    });
}