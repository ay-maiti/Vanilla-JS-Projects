const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//const inputs = ['username','email','password','password2'].map(id=>document.getElementById(id))

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

function checkEmailValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(String(email.value).toLowerCase())){
        showSuccess(email);
    }
    else{
        showError(email, `${showInputName(email)} is not valid`)
    }
}

function checkRequired(inputs){
    inputs.forEach(element=>{
        if(element.value.trim()===''){
            showError(element, `${showInputName(element)} is required`)
        }
        else{
            showSuccess(element)
        }
    })
}

function checkLength(element, min, max){
    if(element.value.length < min){
        showError(element, `${showInputName(element)} must be at least ${min} characters`)
    }
    else if (element.value.length > max){
        showError(element, `${showInputName(element)} must be less than ${max} characters`)
    }
    else{
        showSuccess(element);
    }
}

function passwordMatch(password2){
    if(password.value === password2.value){
        showSuccess(password2);
    }
    else{
        showError(password2, 'Passwords do not match')
    }
}

function showInputName(element){
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

function validateInputs(){
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 20);
    checkLength(password, 5, 20);
    checkEmailValid(email);
    passwordMatch(password2);
}

addEventListener('submit', (e)=>{
    e.preventDefault()    
    validateInputs()
})