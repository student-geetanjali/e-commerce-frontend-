console.log("hello");
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active')
        console.log("button clicked");
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}