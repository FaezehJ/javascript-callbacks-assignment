function finishFunctionality(event) {
    event.preventDefault();
    if(validateForm(event)) {
        alert(`Successfully Submitted Form: \n Name: ${event.target.name.value} \n Email: ${event.target.email.value} \n Password: ${event.target.password.value}`)
    } else {
        const app = document.querySelector('.app')
        let error = document.createElement('p') 
        error.innerHTML=`<p class="error">There was an error submitting the form...</p>`
        app.appendChild(error);
    }
}

userForm.addEventListener('submit', finishFunctionality)


