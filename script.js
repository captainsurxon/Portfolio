const hamburger = document.querySelector('.header .nav_bar .nav_list .hamburger');
const mobile_menu = document.querySelector('.header .nav_bar .nav_list ul');
const menu_item = document.querySelector('.header .nav_bar .nav_list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent"; 
    }
});


menu_item.forEach(etem => {
    menu_item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
