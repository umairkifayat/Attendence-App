import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";



const email = document.querySelector('.email').value;
const password = document.querySelector('.password').value;
const btn = document.querySelector('.btn');


btn.addEventListener('click',(event)=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                window.location = 'data.html';
            })
            .catch((error) => {
                const errorMessage = error.message;
                // alert(errorMessage);
            });

})
