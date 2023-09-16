

function validateEmail(event) {
    let emailForm = document.querySelector("#emailForm");

    let firstEmailConfirm = emailForm.firstEmail.value
    let secondEmailConfirm = emailForm.secondEmail.value

    if (firstEmailConfirm != secondEmailConfirm) {
        emailForm.firstEmail.style.backgroundColor = "Orange";
        emailForm.secondEmail.style.backgroundColor = "Orange";
        window.alert("Email's do not match")
        event.preventDefault();
    }

}

let emailForm = document.querySelector("#emailForm");
emailForm.submit.addEventListener("click", validateEmail);
