import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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


const form = document.querySelector('.form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const firstname = document.querySelector('#firstName').value
    const lasttname = document.querySelector('#lastName').value
    const email = document.querySelector('#email').value
    const rollno = document.querySelector('#Rollno').value
    const phonenumber = document.querySelector('#Phonenumber').value

    
    if (firstname == '' || lasttname == ''|| email == '' || rollno == '' || phonenumber =='') {
        alert('Please complete fill all the inputs ')
    } else {
        window.location = 'admin.html'
        alert('Completely Sucessfully')
        form.reset()
    }
    
    
    
    
    
})


