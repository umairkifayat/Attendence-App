import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth} from "./config.js";

// navbar function start 
const icon = document.querySelector('.menu-icon');
icon.addEventListener('click',()=>{
    function toggleMenu() {
        var navbar = document.querySelector('.navbar');
        navbar.classList.toggle('responsive');
    }
    toggleMenu()

})



// logout function start 
const logbtn = document.querySelector('.logout');

logbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    signOut(auth).then(() => {
        console.log('logout successfully');
        window.location = 'index.html'
}).catch((error) => {
    console.log(error);
});
})