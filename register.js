import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js";

const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmpassword = document.querySelector('.c-password');
const username = document.querySelector('.username');
const btn = document.querySelector('.btn');


btn.addEventListener('click', (event) => {
    event.preventDefault();

    if (confirmpassword.value === password.value) {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                window.location = 'student.html';
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        alert('Please make sure the passwords match.');
    }
});