document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("successMessage");

    let valid = true;
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none";

    name.classList.remove("error", "success");
    email.classList.remove("error", "success");
    message.classList.remove("error", "success");

    if (name.value.trim() === "") {
        nameError.textContent = "Nama tidak boleh kosong.";
        name.classList.add("error");
        valid = false;
    } else {
        name.classList.add("success");
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email tidak boleh kosong.";
        email.classList.add("error");
        valid = false;
    } else {
        email.classList.add("success");
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Pesan tidak boleh kosong.";
        message.classList.add("error");
        valid = false;
    } else {
        message.classList.add("success");
    }

    if (valid) {
        successMessage.style.display = "block";

        name.value = "";
        email.value = "";
        message.value = "";

        name.classList.remove("success");
        email.classList.remove("success");
        message.classList.remove("success");
    }
});
