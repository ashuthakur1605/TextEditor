
function burgarclick(){
    let burgar = document.querySelector('.burgar')
    let navbar = document.querySelector('.navbar')
    let navlist = document.querySelector('.navlist') 
    let bar = document.querySelector('.bar')


 
burgar.addEventListener('click', ()=>{
    navbar.classList.toggle('h-class-resp')
    navlist.classList.toggle('v-class-resp')
    bar.classList.toggle('v-class-resp')

});
}