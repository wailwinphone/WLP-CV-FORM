function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    /*Shift+Alt+Arrow+down to copy the code*/ 
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
    /*Difference is that querySelector can select the whole class while get elementbyId can only choose 1 id*/
}