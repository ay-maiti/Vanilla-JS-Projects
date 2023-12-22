const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")


function showError(element, message){
    const form_control = element.parentElement;
    form_control.className = "form-control error"
    const small = form_control.querySelector('small')
    small.innerText = message;
}

function showSuccess(element){
    const form_control = element.parentElement;
    form_control.className = "form-control success"
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}

console.log(username)
addEventListener('submit', (e)=>{
    e.preventDefault()
    if(username.value=== ''){
        showError(username, "Username is required");
    }
    else{
        showSuccess(username);
    }
    if(email.value=== ''){
        showError(email, "Email is required");
    }
    else{
        showSuccess(email);
    }
    if(password.value=== ''){
        showError(password, "Password is required");
    }
    else{
        showSuccess(password);
    }
    if(password2.value=== ''){
        showError(password2, "Confirm password");
    }
    else{
        showSuccess(password2);
    }
})